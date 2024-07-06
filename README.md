
### 1. コンテナの作成と起動
```
$ docker compose up --build
```
### 2. 下記のようにメッセージが出力されればOK
```
Attaching to postgres
postgres  | 
postgres  | PostgreSQL Database directory appears to contain a database; Skipping initialization
postgres  | 
postgres  | 
postgres  | 2024-07-07 01:32:41.659 JST [1] LOG:  PostgreSQL 16.3 (Debian 16.3-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit を起動しています
postgres  | 2024-07-07 01:32:41.660 JST [1] LOG:  IPv4アドレス"0.0.0.0"、ポート5432で待ち受けています
postgres  | 2024-07-07 01:32:41.660 JST [1] LOG:  IPv6アドレス"::"、ポート5432で待ち受けています
postgres  | 2024-07-07 01:32:41.664 JST [1] LOG:  Unixソケット"/var/run/postgresql/.s.PGSQL.5432"で待ち受けています
postgres  | 2024-07-07 01:47:45.139 JST [16] LOG:  データベースシステムは 2024-07-07 01:47:36 JST にシャットダウンしました
postgres  | 2024-07-07 01:47:45.147 JST [1] LOG:  データベースシステムの接続受け付け準備が整いました
```
### 3. dockerの中に入って操作を行う(別ターミナルで)
```
$ docker exec -it postgres bash
```
### 4. PostgreSQLクラスターの作成とサービスの起動を行う
```
$ pg_createcluster 16 main --start
```
### 5. DBへアクセス
```
$ psql
```
## 6. DBが存在するかを確認する
```
postgres=#\l
```
下記のように表示されていればOK
```
                                                                  データベース一覧
   名前    |  所有者  | エンコーディング | ロケールプロバイダー |  照合順序   | Ctype(変換演算子) | ICUロケール | ICUルール: |     アクセス権限      
-----------+----------+------------------+----------------------+-------------+-------------------+-------------+------------+-----------------------
 postgres  | postgres | UTF8             | libc                 | ja_JP.UTF-8 | ja_JP.UTF-8       |             |            | 
 template0 | postgres | UTF8             | libc                 | ja_JP.UTF-8 | ja_JP.UTF-8       |             |            | =c/postgres          +
           |          |                  |                      |             |                   |             |            | postgres=CTc/postgres
 template1 | postgres | UTF8             | libc                 | ja_JP.UTF-8 | ja_JP.UTF-8       |             |            | =c/postgres          +
           |          |                  |                      |             |                   |             |            | postgres=CTc/postgres
(3 行)
```
下記を実行


$ pg_createcluster 16 main --start