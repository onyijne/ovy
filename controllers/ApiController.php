<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;

class ApiController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'login' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function beforeAction($action)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    /**
     * {@inheritdoc}
     */
    public function afterAction($action, $result)
    {
        $result = parent::afterAction($action, $result);
        $result['token'] = Yii::$app->request->csrfToken;
        $result['user'] = (Yii::$app->user->isGuest)? ['id' => 0] : [
            'id' => Yii::$app->user->getIdentity()->id,
            'username' => Yii::$app->user->getIdentity()->username
        ];
        return $result;
    }

    public function actionBrand()
    {
        $brand = [
            'name' => 'Ovy',
            'logo' => '../assets/logo.png',
            'phone' => '234-805-7477-738',
            'email' => 'mail@domain.com',
            'address' => 'Port Harcourt, Rivers State, Nigeria.'
        ];
        $menus = [
            [
                'id' => 1,
                'title' => 'Home',
                'icon' => 'home',
                'link' => '/'
            ],
            [
                'id' => 2,
                'title' => 'About',
                'icon' => 'info',
                'link' => '/about'
            ],
            [
                'id' => 3,
                'title' => 'Contact',
                'icon' => 'envelope',
                'link' => '/contact'
            ],
            [
                'id' => 4,
                'title' => 'Login',
                'icon' => 'key',
                'link' => '/login'
            ]
        ];
        return [
            'status' => 'success',
            'brand' => ['info' => $brand, 'menus' => $menus]
        ];
    }


    /**
     * Login action.
     *
     * @return Response|string
     */
    public function actionLogin()
    {
        $model = new LoginForm();
        $model->load(Yii::$app->request->post(), '');
        if ($model->login()) {
            return ['result' => 'success', 'user' => [
                'id' => Yii::$app->user->getId(),
                'username' => Yii::$app->user->identity->username
            ]];
        } else {
            return ['result' => 'error', 'messages' => $model->getFirstErrors()];
        }
    }
}
