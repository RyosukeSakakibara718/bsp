# ベースイメージとして公式のnodeイメージを使用
FROM node:20

# 作業ディレクトリを設定
WORKDIR /usr/src/app/

# frontendディレクトリ内のpackage.jsonとpackage-lock.jsonをコピー
COPY ./frontend/package.json ./ 

# 必要なパッケージをインストール
RUN npm install

# frontendディレクトリ内のソースコードをコピー
COPY ./frontend/src ./src

# アプリケーションを起動するコマンドを指定
CMD ["npm", "run", "dev"]

# ポートを127.0.0.1:5173にバインドする
EXPOSE 3000