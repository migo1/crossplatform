<template>
  <div class="register-container full-height sm-p-t-30">
    <div class="d-flex justify-content-center flex-column full-height">
      <img
        src="assets/img/logo.png"
        alt="logo"
        data-src="assets/img/logo.png"
        data-src-retina="assets/img/logo_2x.png"
        width="78"
        height="22"
      />
      <h3>Pages makes it easy to enjoy what matters the most in your life</h3>
      <p>
        Create a pages account. If you have a facebook account, log into it for
        this process. Sign in with <a href="#" class="text-info">Facebook</a> or
        <a href="#" class="text-info">Google</a>
      </p>
      <form @submit.prevent="submit" class="p-t-15">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-group-default">
              <label>Name</label>
              <input
                type="text"
                v-model="form.name"
                placeholder="enter your name"
                class="form-control"
                required=""
                aria-required="true"
              />
              <span class="text-danger" v-if="errors.name">{{
                errors.name[0]
              }}</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-group-default">
              <label>Password</label>
              <input
                type="password"
                v-model="form.password"
                placeholder="Minimum of 4 Charactors"
                class="form-control"
                required=""
                aria-required="true"
              />
              <span class="text-danger" v-if="errors.password">{{
                errors.password[0]
              }}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-group-default">
              <label>Confirm Password</label>
              <input
                type="password"
                v-model="form.password_confirmation"
                placeholder="Minimum of 4 Charactors"
                class="form-control"
                required=""
                aria-required="true"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-group-default">
              <label>Email</label>
              <input
                type="email"
                v-model="form.email"
                placeholder="We will send loging details to you"
                class="form-control"
                required=""
                aria-required="true"
              />
              <span class="text-danger" v-if="errors.email">{{
                errors.email[0]
              }}</span>
            </div>
          </div>
        </div>
        <div class="row m-t-10">
          <div class="col-lg-6">
            <p>
              <small
                >I agree to the
                <a href="#" class="text-info">Pages Terms</a> and
                <a href="#" class="text-info">Privacy</a>.</small
              >
            </p>
          </div>
          <div class="col-lg-6 text-right">
            <a href="#" class="text-info small">Help? Contact Support</a>
          </div>
        </div>
        <button
          aria-label=""
          class="btn btn-primary btn-cons m-t-10"
          type="submit"
        >
          Create a new account
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    errors: [],
  }),
  methods: {
    async submit() {
      try {
        await this.$axios.$get("sanctum/csrf-cookie");
        await this.$axios.$post("/api/register", this.form);
        await this.$auth.loginWith("laravelSanctum", { data: this.form });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>