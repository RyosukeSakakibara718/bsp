1. コンテナ立ち上げ
docker-compose up -d --build 
この時に下記のように出ていればOK

```
 ✔ Container db_01                     Running                              0.0s 
 ✔ Container project-balancer-react-1  Running                              0.0s 
 ✔ Container apache                    Started                              1.5s 
 ```

## 2. 各種設定とインストール
```
$ docker-compose exec apache bash
# chown www-data:www-data storage -R //apacheから操作を行えるように権限を変更する
# composer install 
# npm install
# exit
```

## 3. .env.exampleの内容を.envにコピーする
```
$ cp backend/laravel/.env.example backend/laravel/.env
```
## 4. apacheコンテナからマイグレーションを行う
```
$ docker-compose exec apache bash
# php artisan migrate --seed
    ※ 失敗した場合
    # php artisan migrate:fresh
# exit
```

## 5. dbコンテナからマイグレーションされたテーブルを確認する
```
$ docker-compose exec db bash 
# psql -U username -d postgres
# \dt

下記のように出ればOK

                List of relations
 Schema |         Name          | Type  |  Owner   
--------+-----------------------+-------+----------
 public | cache                 | table | username
 public | cache_locks           | table | username
 public | failed_jobs           | table | username
 public | job_batches           | table | username
 public | jobs                  | table | username
 public | migrations            | table | username
 public | password_reset_tokens | table | username
 public | sessions              | table | username
 public | users                 | table | username
(9 rows)


```

## 6. 開発用のjson-serverを立てる
```
% npx json-server --watch data/db.json --port 3100
db.jsonの箇所について動かしたいjsonを記載
下記が出たら成功

> react@0.0.0 json-server
> json-server --watch data/db.json --port 3100

--watch/-w can be omitted, JSON Server 1+ watches for file changes by default
JSON Server started on PORT :3100
Press CTRL-C to stop
Watching data/db.json...

( ˶ˆ ᗜ ˆ˵ )
```

## 表示確認
### laravel
http://localhost:80
### react
http://localhost:3000

## フロントエンド

- [ディレクトリ構成](https://github.com/RyosukeSakakibara718/project-balancer_doc/blob/main/%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90/frontend-directory.md)
- [コーディング規約](https://github.com/RyosukeSakakibara718/project-balancer_doc/blob/f5ebbc5acde6ab918c45e4003ad4d4f0121e5c1e/%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A6%8F%E7%B4%84/frontend-coding-rules.md)

## バックエンド

- [ディレクトリ構成](https://github.com/RyosukeSakakibara718/project-balancer_doc/blob/main/%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90/backend-directory.md)
- [コーディング規約](https://github.com/RyosukeSakakibara718/project-balancer_doc/blob/main/%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A6%8F%E7%B4%84/backend-coding-rules.md)