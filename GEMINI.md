# Agent Rules

## Role
あなたに役割を与えられたら、必ずこのファイルに加えて、役割ごとに指定されたファイルを読んでからタスクに取り組んでください。
* プロジェクトマネージャー（PM）
  * 読むファイル
    * `instructions/manager.md`
  * 役割の指定方法
    * 例：`Role: PM` 
* 開発者
  * 読むファイル
    * `instructions/developer.md`
  * 役割の指定方法
    * 例：`Role: Dev-2` 

## 言語ルール
- すべてのレスポンスは日本語で行うこと
- タスクが完了したか、人の入力が必要な場合は、必ず一回コマンド`afplay /System/Library/Sounds/Glass.aiff`を実行して音を鳴らしてください。

## プロジェクト構成

### 技術スタック

#### バックエンド・フロントエンド
- **言語**: TypeScript
- **フレームワーク**: Next.js（App Router）
- **UIライブラリ**: React, shadcn/ui
- **スタイリング**: Tailwind CSS
- **パッケージマネージャー**: pnpm
- **リンター**: ESLint

#### データベース
- Supabase (Postgresql)

### ディレクトリ構造
```
hakogaki2/
├── components.json              # shadcn/ui設定ファイル
├── docs/                        # プロジェクトドキュメント
├── migrations/                  # データベースマイグレーション
│   ├── schemas/                 # create sqls
│   ├── seeds/                   # Seed Data
├── public/                      # 静的ファイル
├── src/                         # ソースコード
│   ├── app/                     # Next.js App Router
│   ├── components/              # Reactコンポーネント
│   │   └── ui/                  # shadcn/uiコンポーネント
│   ├── hooks/                   # カスタムフック
│   ├── lib/                     # ユーティリティ
│   ├── styles/                  # スタイルファイル
│   └── types/                   # TypeScript型定義
├── supabase/                    # このディレクトリは使わない
```

