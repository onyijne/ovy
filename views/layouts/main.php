<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrap" id="app">
    <div class="container">
        <nav id="w0" class="navbar-inverse navbar-fixed-top navbar">
            <div class="container">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">My Application</router-link>
                </div>

                <div id="w0-collapse" class="collapse navbar-collapse">
                    <ul id="w1" class="navbar-nav navbar-right nav">
                        <li :class="{'active' : isActiveMenu('/')}">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li :class="{'active' : isActiveMenu('/about')}">
                            <router-link to="/about">About</router-link>
                        </li>
                        <li :class="{'active' : isActiveMenu('/login')}">
                            <router-link to="/login">Login</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <transition>
            <router-view></router-view>
        </transition>
        <div v-if="this.$route.matched.length == 0">
            <?= $content ?>
        </div>

    </div>
</div>

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; My Company <?= date('Y') ?></p>

        <p class="pull-right">Powered by <a href="http://www.yiiframework.com/" rel="external">Yii Framework</a></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
