FROM node:20

# 作業ディレクトリを設定
WORKDIR /usr/src/app/

# frontendディレクトリ内のpackage.jsonとpackage-lock.jsonをコピー
COPY ./frontend/react/package.json ./ 

# 必要なパッケージをインストール
RUN npm install

# frontendディレクトリ内のソースコードをコピー
COPY ./frontend/react/src ./src

# アプリケーションを起動するコマンドを指定
ENTRYPOINT ["npm", "run", "dev"]

# ポートを127.0.0.1:5173にバインドする
EXPOSE 5173