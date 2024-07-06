# 環境構築手順

### 1. Dockerコンテナの立ち上げ
```
$ docker compose up -d --build
```
※laravelに関して </br>
コンテナに入る
```
docker exec -i -t laravel bash
```
コンテナ内でサーバー起動
```
root@fce0f02b6ca6:/var/www/html# php artisan serve --host 0.0.0.0
```
