# ベースイメージとして公式のnodeイメージを使用
FROM node:20

# アプリケーションのディレクトリを作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY ../../frontend/package.json .

# 必要なパッケージをインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY ../../frontend/src .

# アプリケーションを起動するコマンドを指定
CMD [ "npm", "run", "dev" ]