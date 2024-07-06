FROM postgres:16

# Time Zone設定
ENV TZ=Asia/Tokyo

# 必要なロケールのインストールと設定
RUN apt-get update && apt-get install -y locales \
    && echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen \
    && update-locale LANG=ja_JP.UTF-8

# 環境変数で言語設定を指定
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

# PostgreSQLのデフォルトユーザーである"postgres"で接続
USER postgres