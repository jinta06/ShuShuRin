# GA4（Google Analytics 4）導入タスク

## Issue概要
WebサイトにGA4を導入し、ユーザー行動の分析とトラッキングを開始する。

## 背景
- Webサイトのユーザー行動分析が必要
- ページビュー、コンバージョン、ユーザーフローの追跡が必要
- 提供されたGA4 IDを使用して実装

## 実装タスク

### Task 1: GA4基本タグの設置
**概要**: 提供されたGA4タグを`public/index.html`に設置

**設置場所**: `public/index.html`の`<head>`タグ内

**設置コード**:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VMWSZCBJMF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VMWSZCBJMF');
</script>
```

**実装手順**:
1. `public/index.html`ファイルを開く
2. `<head>`タグ内の`<title>`タグの前に上記コードを挿入
3. 実装確認のため開発サーバーを起動してテスト

### Task 2: React環境での最適化検討（オプション）
**概要**: React Router環境でのページビューの適切なトラッキング

**検討事項**:
- SPA（Single Page Application）でのページ遷移追跡
- React Routerのルート変更時のGA4イベント送信
- Componentレベルでのgtag関数の利用

**実装場所候補**:
- `src/App.js`: メインアプリケーションコンポーネント
- 各ページコンポーネント: `src/pages/*.jsx`

### Task 3: 追加のトラッキング設定（今後の拡張）
**概要**: 基本実装後に検討すべき追加トラッキング

**候補機能**:
- Instagram遷移の追跡（InstagramSection.jsx）
- お問い合わせフォーム送信イベント（Contact.jsx）
- コンセプトページでのエンゲージメント追跡
- 画像ギャラリーでのインタラクション追跡

## 技術仕様

### 現在のアプリケーション構造
```
- React 18 + React Router
- Tailwind CSS使用
- SPA構成
- 主要ページ: Home, Concept, Coordinate, BrandStory, Contact
```

### GA4 ID
```
G-VMWSZCBJMF
```

## 受け入れ基準

### Must Have
- [ ] GA4タグが`public/index.html`に正しく設置されている
- [ ] 全ページでGA4が動作することを確認
- [ ] Google Analytics管理画面でデータ受信を確認

### Should Have
- [ ] React Router環境でのページ遷移が正しく追跡される
- [ ] 開発環境と本番環境でのGA4動作確認

### Could Have
- [ ] カスタムイベントの設定（お問い合わせ送信など）
- [ ] eコマース関連のイベント設定（将来的な拡張）

## 実装上の注意点

### セキュリティ
- GA4 IDは既に提供されているため、環境変数化は不要
- CSP（Content Security Policy）がある場合は、Google Analytics domainの許可が必要

### パフォーマンス
- GA4スクリプトは`async`属性で非同期読み込み
- ページ読み込み速度への影響を最小限に

### プライバシー
- 今後必要に応じてCookie同意バナーの実装を検討
- GDPR対応が必要な場合は追加設定を検討

## テスト手順

1. **実装後の動作確認**:
   ```bash
   npm start
   ```
   ブラウザの開発者ツールでGA4タグの読み込みを確認

2. **Real-time Analytics確認**:
   Google Analytics管理画面の「リアルタイム」でアクセス確認

3. **各ページでの動作確認**:
   - `/` (Home)
   - `/concept`
   - `/coordinate`
   - `/brand-story`
   - `/contact`

## 参考リンク
- [Google Analytics 4 設定ガイド](https://support.google.com/analytics/answer/9304153)
- [React with Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)

## 担当者
- **実装者**: TBD
- **レビュアー**: TBD
- **期限**: TBD

---
**作成日**: 2025年9月26日
**更新日**: 2025年9月26日
