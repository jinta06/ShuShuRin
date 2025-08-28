# Amplifyカスタムドメイン設定ガイド

AWSAmplifyで独自ドメインを使用してアパレルブランドサイト「shushurin」を公開するための詳細な設定手順を記載します。

## 概要

AmplifyとRoute53を使用して以下の構成を実現します：

| 環境 | ブランチ | ドメイン | 用途 |
|------|---------|----------|------|
| 本番 | `main` | `www.shushurin.com` | 一般公開サイト |
| ステージング | `develop` | `dev.shushurin.com` | 開発確認用 |

## 前提条件

- AWSアカウントが作成済み
- Amplifyでアプリケーションがデプロイ済み
- GitHubリポジトリとの連携が完了

---

## 手順 1: ドメインを取得する

### Route53でのドメイン取得

1. **AWSコンソールにログイン**
   - AWS Management Console → Route53にアクセス

2. **ドメイン登録**
   - 左メニューから「Registered domains（登録済みドメイン）」を選択
   - 「Register Domain（ドメインの登録）」をクリック

3. **ドメイン検索・選択**
   - ドメイン名: `shushurin.com` を入力
   - 利用可能性を確認して選択

4. **購入設定**
   - 登録期間を設定（通常1年）
   - 自動更新の設定
   - **費用**: 月約15USD（年間約$12-15）

5. **連絡先情報入力**
   - ドメイン所有者情報を入力
   - WHOIS情報の公開設定

6. **支払い完了**
   - クレジットカード情報を入力
   - 注文を確定

> **⚠️ 注意**: ドメイン取得には時間がかかる場合があります（通常数分〜数時間）

---

## 手順 2: Amplifyでカスタムドメイン追加

### Amplify管理画面でのドメイン設定

1. **Amplifyコンソールアクセス**
   - AWS Management Console → Amplify
   - 対象アプリ「shushurin」を選択

2. **ドメイン管理画面へ移動**
   - 左メニューの「Domain management（ドメイン管理）」をクリック

3. **ドメイン追加開始**
   - 「Add domain（ドメインを追加）」ボタンをクリック

4. **ドメイン情報入力**
   - **Domain（ドメイン）**: `shushurin.com` を入力
   - 「Configure domain（ドメインを設定）」をクリック

---

## 手順 3: ブランチとサブドメインの紐付け

### ブランチ設定の詳細

1. **サブドメイン設定画面**
   - ドメイン追加後、サブドメイン設定画面が表示される

2. **本番環境設定**
   - **Subdomain（サブドメイン）**: `www`
   - **Branch（ブランチ）**: `main`
   - **URL**: `www.shushurin.com`

3. **ステージング環境設定**
   - 「Add subdomain（サブドメインを追加）」をクリック
   - **Subdomain**: `dev`
   - **Branch**: `develop`
   - **URL**: `dev.shushurin.com`

4. **設定確認**
   ```
   ✅ www.shushurin.com → main ブランチ（本番）
   ✅ dev.shushurin.com → develop ブランチ（ステージング）
   ```

5. **設定保存**
   - 「Save（保存）」をクリック

---

## 手順 4: DNS設定

### Route53での自動設定

Route53で管理しているドメインの場合、Amplifyが自動でDNS設定を行います。

#### 自動設定の確認方法

1. **DNS設定状況確認**
   - Amplify Domain management画面で設定状況を確認
   - 「DNS records（DNSレコード）」セクションを確認

2. **Route53での確認**
   - Route53 → Hosted zones → `shushurin.com`
   - 以下のレコードが自動作成されることを確認：
     ```
     www.shushurin.com  CNAME  [amplify-app-id].amplifyapp.com
     dev.shushurin.com  CNAME  [amplify-app-id].amplifyapp.com
     ```

### 他社ドメインの場合（参考）

他社でドメインを管理している場合の手動設定方法：

1. **DNS設定値の取得**
   - Amplify管理画面でCNAMEレコードの値をコピー

2. **ドメイン管理サービスで設定**
   ```
   Type: CNAME
   Name: www
   Value: [amplifyが提示する値]
   
   Type: CNAME  
   Name: dev
   Value: [amplifyが提示する値]
   ```

---

## 手順 5: HTTPS自動発行

### SSL証明書の自動設定

Amplifyは無料のAmazon Certificate Manager（ACM）を使用してSSL証明書を自動発行します。

#### 設定プロセス

1. **証明書発行開始**
   - ドメイン設定完了後、ACMが自動で証明書発行を開始

2. **証明書検証**
   - DNS検証が自動実行される
   - Route53管理ドメインの場合は完全自動

3. **HTTPS有効化**
   - 証明書発行完了後、HTTPSが自動有効化
   - HTTP → HTTPS リダイレクトも自動設定

#### 確認方法

```bash
# SSL証明書の確認
curl -I https://www.shushurin.com
curl -I https://dev.shushurin.com
```

---

## 手順 6: 設定完了・確認

### 最終確認チェックリスト

#### ✅ ドメイン設定確認
- [ ] `https://www.shushurin.com` で本番サイトにアクセス可能
- [ ] `https://dev.shushurin.com` でステージングサイトにアクセス可能
- [ ] HTTPからHTTPSへの自動リダイレクト動作
- [ ] SSL証明書が有効（ブラウザで鍵マークが表示）

#### ✅ デプロイフロー確認
```bash
# 1. ローカルで変更
git checkout develop
git add .
git commit -m "テスト変更"
git push origin develop

# 2. ステージング環境で確認
# https://dev.shushurin.com で変更を確認

# 3. 本番反映
git checkout main
git merge develop
git push origin main

# 4. 本番環境で確認
# https://www.shushurin.com で変更を確認
```

### 完了までの時間目安

| 工程 | 所要時間 |
|------|----------|
| ドメイン取得 | 数分〜数時間 |
| Amplify設定 | 5-10分 |
| DNS反映 | 数分〜48時間 |
| SSL証明書発行 | 5-30分 |

---

## トラブルシューティング

### よくある問題と解決方法

#### 🚨 DNS反映が遅い
**症状**: ドメインにアクセスしてもサイトが表示されない
**解決方法**:
- DNS反映には最大48時間かかる場合がある
- `nslookup www.shushurin.com` でDNS設定を確認
- 時間を置いて再確認

#### 🚨 SSL証明書エラー
**症状**: 「証明書が無効」エラーが表示される
**解決方法**:
- Amplify管理画面でSSL証明書の状態を確認
- DNS検証が完了しているか確認
- 必要に応じて証明書を再発行

#### 🚨 ブランチ設定ミス
**症状**: 間違ったブランチの内容が表示される
**解決方法**:
- Amplify Domain management で設定を確認
- サブドメインとブランチの紐付けを修正
- 必要に応じて再デプロイ実行

---

## 運用開始後の作業フロー

### 日常的な開発作業

1. **新機能開発**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/new-function
   # 開発作業
   git add .
   git commit -m "新機能を追加"
   git push origin feature/new-function
   ```

2. **ステージング確認**
   - GitHub でPull Request作成
   - `develop` ブランチにマージ
   - `https://dev.shushurin.com` で動作確認

3. **本番公開**
   ```bash
   git checkout main
   git merge develop  
   git push origin main
   ```

4. **本番確認**
   - `https://www.shushurin.com` で最終確認
   - 数分後に変更が反映される

---

**設定完了おめでとうございます！🎉**

これで「ローカル開発 → push → 自動デプロイ → カスタムドメイン反映」の完全自動化フローが構築されました。
