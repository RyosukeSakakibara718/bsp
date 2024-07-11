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
# php artisan migrate
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
## 表示確認
### laravel
http://localhost:80
### react
http://localhost:3000