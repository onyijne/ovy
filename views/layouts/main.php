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
    <link rel="apple-icon" sizes="57x57" href="<?php  echo Yii::getAlias('@web').'/auto/img/icons/apple-icon-57x57.png' ?>">
<link rel="apple-icon" sizes="60x60" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-60x60.png">
<link rel="apple-icon" sizes="72x72" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-72x72.png">
<link rel="apple-icon" sizes="76x76" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-76x76.png">
<link rel="apple-icon" sizes="114x114" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-114x114.png">
<link rel="apple-icon" sizes="120x120" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-120x120.png">
<link rel="apple-icon" sizes="144x144" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-144x144.png">
<link rel="apple-icon" sizes="152x152" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-152x152.png">
<link rel="apple-icon" sizes="180x180" href="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo Yii::getAlias('@web').'/auto/img/icons/android-chrome-192x192.png' ?>">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo Yii::getAlias('@web').'/auto/img/icons/favicon-32x32.png' ?>">
<link rel="icon" type="image/png" sizes="96x96" href="<?php echo Yii::getAlias('@web').'/auto/img/icons/favicon-96x96.png' ?>">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo Yii::getAlias('@web').'/auto/img/icons/favicon-16x16.png' ?>">
<link rel="icon" href="<?php  echo Yii::getAlias('@web').'/auto/favicon.ico' ?>">
<?php if (YII_ENV_PROD): ?>
<link rel="manifest" href="<?php  echo Yii::getAlias('@web').'/auto/manifest.json' ?>">
<?php endif; ?>
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="<?php echo Yii::getAlias('@web') ?>/auto/img/icons/ms-icon-144x144.png">
    <?php $this->registerCsrfMetaTags() ?>
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
