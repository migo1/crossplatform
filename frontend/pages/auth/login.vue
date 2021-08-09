<template>
  <div class="login-wrapper">
    <!-- START Login Background Pic Wrapper-->

    <!-- END Login Background Pic Wrapper-->
    <!-- START Login Right Container-->
    <div class="login-container bg-white">
      <div class="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
        <img
          src="~/assets/img/logo-48x48_c.png"
          alt="logo"
          data-src="assets/img/logo-48x48_c.png"
          data-src-retina="assets/img/logo-48x48_c@2x.png"
          width="48"
          height="48"
        />
        <h2 class="p-t-25">
          Get Started <br />
          with your Dashboard
        </h2>
        <p class="mw-80 m-t-5">Sign in to your account</p>
        <!-- START Login Form -->
        <form
          @submit.prevent="login"
          id="form-login"
          class="p-t-15"
          role="form"
        >
          <div class="alert alert-danger mt-3" v-if="errors">
            <span class="">{{ errors }}</span>
          </div>
          <!-- START Form Control-->
          <div class="form-group form-group-default">
            <label>Email</label>
            <div class="controls">
              <input
                type="text"
                v-model="form.email"
                placeholder="email"
                class="form-control"
                required
              />
            </div>
          </div>
          <!-- END Form Control-->
          <!-- START Form Control-->
          <div class="form-group form-group-default">
            <label>Password</label>
            <div class="controls">
              <input
                type="password"
                v-model="form.password"
                class="form-control"
                name="password"
                placeholder="Credentials"
                required
              />
            </div>
          </div>
          <!-- START Form Control-->
          <div class="row">
            <!-- <div class="col-md-6 no-padding sm-p-l-10">
              <div class="form-check">
                <input type="checkbox" value="1" id="checkbox1" />
                <label for="checkbox1">Remember me</label>
              </div>
            </div> -->
            <div class="col-md-6 d-flex align-items-center justify-content-end">
              <button
                aria-label=""
                class="btn btn-primary btn-lg m-t-10"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </div>
          <div class="m-b-5 m-t-30">
            <a href="#" class="normal">Lost your password?</a>
          </div>
          <div>
            <a href="#" class="normal">Not a member yet? Signup now.</a>
          </div>
          <!-- END Form Control-->
        </form>
        <!--END Login Form-->
      </div>
    </div>
    <!-- END Login Right Container-->
  </div>
  <!-- START OVERLAY -->
</template>

<script>
export default {
  layout: "blank",
   data: () => ({
            form: {
                email: '',
                password: '',
            },
            errors: []
        }),
        methods: {
            async submit() {
                try {
                    await this.$axios.$get('sanctum/csrf-cookie')
                    await this.$auth.loginWith('laravelSanctum', {data: this.form})
                } catch (error) {
                    this.errors = error.response.data.errors
                }
            }
        }
};
</script>