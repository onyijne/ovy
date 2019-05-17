This is a skeleton [Onsen UI](https://onsen.io/) and [Vue.js](https://vuejs.org/) application integrated with [Yii 2](http://www.yiiframework.com/) as a backend.

The template was built using vue-cli 3, Vuex support and contains examples of using Onsen UI with Vue.js and Yii2, with the ability to rapidly develop a native looking ajax powered app with CSRF enabled.

Assets management is done via npm.

DIRECTORY STRUCTURE
-------------------

      assets/             contains assets definition
      commands/           contains console commands (controllers)
      config/             contains application configurations
      controllers/        contains Web controller classes
      mail/               contains view files for e-mails
      models/             contains model classes
      modules/            contains application modules
      node_modules        contains npm packages
      runtime/            contains files generated during runtime
      vue-app/                contains the onsen-ui and vue.js templates
      tests/              contains various tests for the basic application
      vendor/             contains dependent 3rd-party packages
      views/              contains view files for the Web application
      web/                contains the entry script and Web resources



REQUIREMENTS
------------

### Development

The minimum requirement is that your Web server supports PHP 7.1.0. and you have node.js, yarn, vue-cli3 and composer installed

If you do not have **Node.js** installed you can [install it by following the instructions](https://nodejs.org/en/download/)

If you do not have **Yarn** installed you can [install it by following the instructions](https://yarnpkg.com/lang/en/docs/install/)

If you do not have vue-cli installed you may follow the instruction [here](https://cli.vuejs.org/guide/installation.html)

If you do not have [Composer](http://getcomposer.org/), you may install it by following the instructions
at [getcomposer.org](http://getcomposer.org/doc/00-intro.md#installation-nix).


### Production

The minimum requirement is that your Web server supports PHP 7.1.0.

INSTALLATION
------------

### Install via Composer

You can install this project template using the following command:

~~~
php composer create-project --prefer-dist --stability=dev onyijne/ovy ovy
~~~

Then `cd ovy/vue-app` and run `yarn install`

Now you should be able to access the application through the following URL, assuming `ovy` is the directory
directly under the Web root. **NEVER TRY THIS IN PRODUCTION**

~~~
http://localhost/ovy/web/
~~~

~~~
To populate assets use `yarn dev` during developement and `yarn build` for production
~~~

CONFIGURATION
-------------

Please, check the [Yii 2 Basic Project Template](https://github.com/yiisoft/yii2-app-basic#configuration) and [Vue.js](https://cli.vuejs.org/config/) configuration sections.


You would also need to edit certain values in **vue.config.js** file like `outputDir` and `devServer.proxy.target` and in **store/state.js** `baseApiUrl.dev` & `baseApiUrl.prod` **USE IGNITO MODE DURING DEVELOPMENT TO AVOID CACHING ISSUE**

CREATE VUE.JS TEMPLATE
----------------------

You can run console command to get a basic vue.js template for your components
~~~
php yii make/template --path=app/pages/TestComponent.vue
~~~

It will create a file TestComponent.vue with the following content 
```
 <template>
     <div>
 
     </div>
 </template>
 
 <script>
     export default {
         data() {
             return {
             }
         },
         mounted: function () {
 
         },
         methods: {
 
         },
         watch: {
 
         }
     }
 </script>
``` 


CONTRIBUTING
-----------------------

Contributions are **welcome** and will be fully **credited**.
