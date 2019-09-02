<?php

/*
 * Copyright (c) Sajflow 2018.
 * please see the LICENSE.md file for license information
 * 
 */

namespace app\models;

use Yii;
use yii\base\Component;
use yii\helpers\Json;
/**
 * Description of Changelly
 *
 * @author samuel
 */
class Google extends Component 
{
    /**
     * should be passed on initialisation
     *
     * @var app\models\Settings 
     */
    public $settings;
    private $key;
    private $secret;
    private $url;
    private $id; 
    private $sign;
    public $message;


    
    protected $transport = [];
    public $_item = [];
    public $resultsTotal;
    public $nextPage;
    public $prevPage;
    public $_video= [];
    
    
    public function __construct($config = array()) 
    {        
        parent::__construct($config);
        $this->setCredentials();
    }

    private function setCredentials() 
    {
        $this->key = 'AIzaSyCYrrK8xOnAuTPGp3rxl0YUhYum7jizvok';
        $this->secret = '';
        $this->url = 'https://www.googleapis.com/youtube/v3';
    }
    
    public function getVideos() 
    {
        $res = $this->send('/activities?part=snippet&channelId=UCJWkyPK7VDx7xrxMEiKM46w&key='.$this->key);
        return $res;
    }

    private function setHeaders()
    {        
       // $this->sign = hash_hmac('sha512', $this->message, $this->secret);
        return [
               // 'api-key: ' . $this->key,
               // 'sign: ' . $this->sign,
              //  'Content-type: application/json',
              'referer: ' . Yii::$app->request->hostInfo
            ];
    }
    
    private function send($path)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->url.$path); 
        curl_setopt($ch, CURLOPT_HEADER, TRUE); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); 
       // curl_setopt($ch, CURLOPT_POST, 1);
       // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
       // curl_setopt($ch, CURLOPT_POSTFIELDS, $this->message);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->setHeaders());
        
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
    
}