<template>
<div class="lock-container full-height">
      <!-- START PAGE CONTENT WRAPPER -->
      <div class="full-height sm-p-t-50 d-md-flex">
        <div class="row full-width">
            <!-- START Lock Screen User Info -->
            <div class="d-flex justify-content-start ">
            
              <div class="mt-3">
              <ul
          class="
            d-lg-inline-block d-none
            no-margin
            d-lg-inline-block
            b-grey 
            no-style
            p-l-20 p-r-20
          "
        >
          <li class="p-r-5 inline">
            <NuxtLink to="/auth/login">Login</NuxtLink>
          </li>
          <li class="p-r-5 inline">
            <NuxtLink to="/auth/register">Register</NuxtLink>
          </li>
        </ul>
              </div>
            </div>
            <!-- END Lock Screen User Info -->
     
        </div>
      </div>
      <!-- END PAGE CONTENT WRAPPER -->
    </div>
</template>

<script>
export default {
     layout: "blank",
}
</script>
