# Socket 通信用サーバー

このディレクトリにはフロントエンドと連携する Socket.IO サーバーを配置しています。ルーム単位のイベント配信や汎用的なイベントフォワード API を持っており、GraphQL Subscriptions に近いイベント駆動の体験を実現できます。

## 主要機能
- `room:join` / `room:leave` で任意のルームに参加・離脱
- `event:emit` でルーム向け、または全体向けにカスタムイベントをブロードキャスト
- `server:announcement` や `room:joined` などのサーバー通知で状態を即時フィードバック
- `/healthz` で動作確認可能なヘルスチェックエンドポイント

## 起動方法
```bash
cd back
cp .env.example .env   # 必要に応じてポートや CORS 設定を調整
npm install            # 依存関係をインストール（初回のみ）
npm run dev            # ホットリロード付きで開発サーバー起動
```

本番ビルドは `npm run build`、起動は `npm start` で実行できます。
