<?php

return [
  'paths' => ['api/*', 'v1/*'],  // CORSを許可するAPIのパス

  'allowed_methods' => ['*'],    // 許可するHTTPメソッド（GET, POST, PUT, DELETEなど）

  'allowed_origins' => ['*'],    // 許可するオリジン（ドメイン）。特定のドメインのみ許可する場合は配列で指定

  'allowed_origins_patterns' => [],

  'allowed_headers' => ['*'],    // 許可するHTTPヘッダー

  'exposed_headers' => [],

  'max_age' => 0,

  'supports_credentials' => false,
];
