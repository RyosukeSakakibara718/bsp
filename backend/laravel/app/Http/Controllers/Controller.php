<?php

declare(strict_types=1);

abstract class Controller
{
    //
}

class ExampleController extends Controller {
    public function demo() {
        echo "Hello, World!";
    }
}

function add(int $a, int $b) {
    return $a + $b;
}

echo add(2, '3'); // 出力: 5
