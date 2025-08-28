# アパレルショップのブランドサイト作成プロジェクト

## 概要
アパレルショップのWebサイトを作成したいです。
ショッピング機能は不要でブランドサイトとして構築します。
初心者エンジニアとして段階的な学習フローで開発を進めたいと考えています。

## プロジェクト詳細
- **サイト種類**: アパレルブランドサイト
- **機能範囲**: ブランド紹介（ショッピング機能なし）
- **リポジトリ**: `sample/shushurin`
- **技術スタック**: React + Tailwind CSS
- **開発環境**: Ubuntu（WSL）

## 学習フロー

### ① ローカル開発環境構築
- [ ] Ubuntu（WSL）上でReact + Tailwindの環境を構築
- [ ] `npm start`で開発用サーバーを立ち上げ
- [ ] ローカルでの実装・テスト

### ② GitHubへのコード管理
- [ ] 完成したコードを以下の流れでGitHubに送信
  - `git add`
  - `git commit`
  - `git push`
- [ ] GitHubを「ソースコードの保管庫」として活用

### ③ S3への手動デプロイ（学習目的）
- [ ] `npm run build`でbuild/フォルダを生成
- [ ] build/フォルダの中身をS3バケットにアップロード
- [ ] CloudFrontを設定して世界中からの高速アクセスを実現
- [ ] **目標**: 「ReactアプリをS3で公開する」経験を積む

### ④ AmplifyでCI/CD構築（自動デプロイ）
- [x] AmplifyでGitHubとの連携を設定
- [x] 自動デプロイフローの構築：
  - GitHubへpush
  - Amplifyが自動実行：
    - `npm install`
    - `npm run build`
    - ファイルのホスティング
  - 数分後にAmplifyのURLが更新

### ⑤ 継続的開発フローの確立
- [x] 以下の開発サイクルを構築：
  1. ローカルで修正
  2. `git commit` & `git push`
  3. Amplifyが自動でビルド & デプロイ
  4. 公開サイトが自動更新

## 成果物
- [ ] 動作するアパレルブランドサイト
- [ ] GitHubリポジトリでのコード管理
- [ ] S3での手動デプロイ経験
- [ ] AmplifyでのCI/CD自動化
- [ ] 継続的な開発・デプロイフローの習得

## 学習目標
- React + Tailwind CSSでのフロントエンド開発
- Gitを使ったバージョン管理
- AWSサービス（S3、CloudFront、Amplify）の実践的活用
- CI/CDパイプラインの理解と構築
- 実際のWebサイト公開・運用経験

## 技術要件
- **フロントエンド**: React, Tailwind CSS
- **開発環境**: Ubuntu (WSL), Node.js, npm
- **バージョン管理**: Git, GitHub
- **デプロイ**: AWS S3, CloudFront, Amplify
- **CI/CD**: GitHub + Amplify連携

## 期待される学習効果
1. モダンなフロントエンド開発手法の習得
2. クラウドサービスを活用したWebサイト公開経験
3. 自動化されたデプロイメントパイプラインの理解
4. 実際のプロジェクト開発フローの体験

---

**Labels**: `enhancement`, `beginner-friendly`, `documentation`, `react`, `aws`, `ci-cd`
**Assignee**: 開発者自身
**Milestone**: v1.0 - 基本サイト公開
