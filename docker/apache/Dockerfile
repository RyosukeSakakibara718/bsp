FROM php:8.2-apache-bullseye

# apt install iputils-ping net-tools で ping を導入
RUN apt-get update \
    && apt-get install -y zlib1g-dev libzip-dev unzip vim iputils-ping net-tools sudo\
    && docker-php-ext-install zip

# 必要なパッケージをインストール
RUN apt-get update && \
    apt-get install -y \
        gnupg \
        libpq-dev \
        curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install npm@8.12.1 --global \
    && docker-php-ext-install pdo pdo_pgsql


# a2emod rewrite をして apache に rewrite モジュールを追加
# これをしないと Laravel でルート以外にアクセスできない
RUN a2enmod rewrite

# Apache を再起動する
RUN service apache2 restart

COPY --from=composer:2.4.1 /usr/bin/composer /usr/bin/composer

ADD docker/apache/php.ini /usr/local/etc/php/

# Apache の conf は seites-available に作成し
# a2ensite コマンドでシンボリックリンクを sites-enabled に作成する
ADD docker/apache/config/000-default.conf /etc/apache2/sites-available/
RUN a2ensite 000-default

WORKDIR /var/www/html

COPY ./backend /var/www/html

# laravelプロジェクトを作成するまではコメントアウト
# RUN chown www-data storage/ -R \
    # && composer install\
    # && npm install