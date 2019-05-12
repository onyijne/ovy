<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
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
    <?php
     if (!YII_ENV_DEV) {
         echo "<link href=/auto/app.js rel=preload as=script>
         <link href=/auto/js/chunk-vendors.js rel=preload as=script>";
     }
     $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrap" id="app">
   <v-ons-page>
     <div class="content">
     <header-com></header-com>
        <transition>
            <router-view></router-view>
        </transition>
        <div v-if="this.$route.matched.length === 0">
            <?= $content ?>
        </div>
        <footer class="footer">
            <div class="container">
                <p class="pull-left">&copy; My Company <?= date('Y') ?></p>

                <p class="pull-right">Powered by <a href="http://www.yiiframework.com/" rel="external">Yii Framework</a></p>
            </div>
        </footer>
     </div>
    </v-ons-page>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
