<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-if="!isGuest">
          <h1>User was successfully logged in. Found user id {{ current_user }}</h1>
        </div>
        <div
          v-else
          class="form-horizontal"
        >
          <h1>Login page</h1>
          <p>Please fill out the following fields to login:</p>

          <div
            class="form-group field-loginform-username required"
            :class="{'has-error': login_error.length !== 0}"
          >
            <label
              for="loginform-username"
              class="col-lg-1 control-label"
            >
              Username
            </label>
            <div class="col-lg-3">
              <input
                id="loginform-username"
                v-model="login"
                type="text"
                autofocus="autofocus"
                aria-required="true"
                class="form-control"
                :aria-invalid="login_error.length !== 0"
              >
            </div>
            <div
              v-if="login_error.length !== 0"
              class="col-lg-8"
            >
              <p class="help-block help-block-error">
                {{ login_error }}
              </p>
            </div>
          </div>

          <div
            class="form-group field-loginform-password required"
            :class="{'has-error': password_error.length !== 0}"
          >
            <label
              for="loginform-password"
              class="col-lg-1 control-label"
            >
              Password
            </label>
            <div class="col-lg-3">
              <input
                id="loginform-password"
                v-model="password"
                type="password"
                aria-required="true"
                class="form-control"
                :aria-invalid="password_error.length !== 0"
              >
            </div>
            <div
              v-if="password_error.length !== 0"
              class="col-lg-8"
            >
              <p class="help-block help-block-error ">
                {{ password_error }}
              </p>
            </div>
          </div>
          <div class="form-group field-loginform-rememberme">
            <div class="col-lg-offset-1 col-lg-3">
              <input
                id="loginform-rememberme"
                v-model="remember_me"
                type="checkbox"
              >
              <label for="loginform-rememberme">
                Remember Me
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-offset-1 col-lg-11">
              <button
                type="button"
                name="login-button"
                class="btn btn-primary"
                @click="attemptLogin"
              >
                Login
              </button>
            </div>
          </div>

          <div
            class="col-lg-offset-1"
            style="color:#999;"
          >
            You may login with <strong>admin/admin</strong> or <strong>demo/demo</strong>.<br>
            To modify the username/password, please check out the code <code>app\models\User::$users</code>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        login: '',
        password: '',
        remember_me: 0
      }
    },
    computed: {
      isGuest () { return this.$store.getters.isGuest },
      current_user () { return this.$store.getters.user.id },
      login_error: {
        get () { return this.$store.getters.formError('login_error') },
        set (value) { this.$store.commit('formError', { property: 'login_error', value: value }) }
      },
      password_error: {
        get () { return this.$store.getters.formError('password_error') },
        set (value) { this.$store.commit('formError', { property: 'password_error', value: value }) }
      }
    },
    methods: {
      attemptLogin() {
        this.login_error = ''
        this.password_error = ''

        if (!this.login.length) {
          this.login_error = 'Username cannot be blank.'
        }
        if (!this.password.length) {
          this.password_error = 'Password cannot be blank.'
        }
        if (this.password_error.length === 0 && this.login_error.length === 0) {
            this.$store.dispatch('attemptLogin', {
              username: this.login,
              password: this.password,
              remember_me: this.remember_me
            })
        }
      }
    }
  }
</script>
