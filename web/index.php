<?php
$root = '/var/www/ovy';
// comment out the following two lines when deployed to production
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

require $root. '/vendor/autoload.php';
require $root. '/vendor/yiisoft/yii2/Yii.php';

$config = require $root. '/config/web.php';

(new yii\web\Application($config))->run();
