1. コンテナ立ち上げ
docker-compose up -d --build 
この時に下記のように出ていればOK

```
 ✔ Network project-balancer_net1  Created                                  0.1s 
 ✔ Container db_01                Started                                  0.4s 
 ✔ Container apache               Started                                  0.5s 
 ```

## 2. 各種設定
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
