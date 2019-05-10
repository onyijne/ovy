<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
      //  'css/site.css',
    //    'assets/style.css'
    ];
    public $js = [
         'auto/app.js'
    ];
    public $depends = [
    ];

    public function init ()
    {
        parent::init();
        if (!YII_ENV_DEV) {
            $this->js[] = 'auto/service-worker.js' ;
        } else {
            //$this->js = 'auto/app.js';
        }
    }
}
