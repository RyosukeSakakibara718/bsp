# ベースイメージとして公式の PHP イメージを使用
FROM php:8.2-fpm

# 作業ディレクトリを設定
WORKDIR /var/www/html

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install zip pdo_mysql

# Composer のインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Laravel のインストールと設定
COPY ./backend /var/www/html
RUN composer install
RUN cp .env.example .env
RUN php artisan key:generate

# ポートを指定してバインドする
EXPOSE 8000

# コンテナ起動時のコマンドを設定
CMD ["php-fpm"]
