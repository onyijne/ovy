<template>
    <div>

        <div v-if="is_logged_in">
            <h1>User was successfully logged in. Found user id {{current_user}}</h1>
        </div>
        <div class="form-horizontal" v-else>
            <h1>Login page</h1>
            <p>Please fill out the following fields to login:</p>

            <div class="form-group field-loginform-username required" :class="{'has-error': login_error.length != 0}">
                <label for="loginform-username" class="col-lg-1 control-label">Username</label>
                <div class="col-lg-3">
                    <input type="text" id="loginform-username" v-model="login"
                           autofocus="autofocus" aria-required="true" class="form-control"
                           :aria-invalid="login_error.length != 0">
                </div>
                <div class="col-lg-8" v-if="login_error.length != 0">
                    <p class="help-block help-block-error">{{login_error}}</p>
                </div>
            </div>

            <div class="form-group field-loginform-password required"
                 :class="{'has-error': password_error.length != 0}">
                <label for="loginform-password" class="col-lg-1 control-label">Password</label>
                <div class="col-lg-3">
                    <input type="password" id="loginform-password" v-model="password" aria-required="true"
                           class="form-control" :aria-invalid="password_error.length != 0">
                </div>
                <div class="col-lg-8" v-if="password_error.length != 0">
                    <p class="help-block help-block-error ">{{password_error}}</p>
                </div>
            </div>
            <div class="form-group field-loginform-rememberme">
                <div class="col-lg-offset-1 col-lg-3">
                    <input type="checkbox" id="loginform-rememberme" v-model="remember_me">
                    <label for="loginform-rememberme">Remember Me</label>
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-offset-1 col-lg-11">
                    <button type="button" name="login-button" class="btn btn-primary" @click="attemptLogin">Login
                    </button>
                </div>
            </div>

            <div class="col-lg-offset-1" style="color:#999;">
                You may login with <strong>admin/admin</strong> or <strong>demo/demo</strong>.<br>
                To modify the username/password, please check out the code <code>app\models\User::$users</code>.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                is_logged_in: false,
                current_user: null,
                login: '',
                password: '',
                remember_me: 0,
                login_error: '',
                password_error: ''
            }
        },
        methods: {
            attemptLogin() {
                this.login_error = '';
                this.password_error = '';

                if (!this.login.length) {
                    this.login_error = 'Username cannot be blank.';
                }

                if (!this.password.length) {
                    this.password_error = 'Password cannot be blank.';
                }

                if(this.password_error.length == 0 && this.login_error.length == 0) {
                    axios({
                        method: 'post',
                        url: '/api/login',
                        responseType: 'json',
                        data: {
                            username: this.login,
                            password: this.password,
                            rememberMe: this.remember_me
                        }
                    }).then((response) => {
                        this.refreshCSRFToken(response.data.token);
                        if (response.data.result == 'success') {
                            this.is_logged_in = true;
                            this.current_user = response.data.user_id;
                        } else {
                            if (response.data.messages.password) {
                                this.password_error = response.data.messages.password;
                            }
                            if (response.data.messages.username) {
                                this.login_error = response.data.messages.username;
                            }
                        }
                })
                }
            },
            refreshCSRFToken(token) {
                window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
            }
        }
    }
</script>
