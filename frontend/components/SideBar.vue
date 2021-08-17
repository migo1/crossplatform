<template>
    <!-- BEGIN SIDEBPANEL-->
    <nav class="page-sidebar" data-pages="sidebar">
      <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->
      <div class="sidebar-overlay-slide from-top" id="appMenu">
        <div class="row">
          <div class="col-xs-6 no-padding">
            <a href="#" class="p-l-40"
              ><img src="assets/img/demo/social_app.svg" alt="socail" />
            </a>
          </div>
          <div class="col-xs-6 no-padding">
            <a href="#" class="p-l-10"
              ><img src="assets/img/demo/email_app.svg" alt="socail" />
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 m-t-20 no-padding">
            <a href="#" class="p-l-40"
              ><img src="assets/img/demo/calendar_app.svg" alt="socail" />
            </a>
          </div>
          <div class="col-xs-6 m-t-20 no-padding">
            <a href="#" class="p-l-10"
              ><img src="assets/img/demo/add_more.svg" alt="socail" />
            </a>
          </div>
        </div>
      </div>
      <!-- END SIDEBAR MENU TOP TRAY CONTENT-->
      <!-- BEGIN SIDEBAR MENU HEADER-->
      <div class="sidebar-header">
        <img
          src="assets/img/logo_white.png"
          alt="logo"
          class="brand"
          data-src="assets/img/logo_white.png"
          data-src-retina="assets/img/logo_white_2x.png"
          width="78"
          height="22"
        />
        <div class="sidebar-header-controls">
          <button
            aria-label="Toggle Drawer"
            type="button"
            class="btn btn-icon-link invert sidebar-slide-toggle m-l-20 m-r-10"
            data-pages-toggle="#appMenu"
          >
            <i class="pg-icon">chevron_down</i>
          </button>
          <button
            aria-label="Pin Menu"
            type="button"
            class="
              btn btn-icon-link
              invert
              d-lg-inline-block
              d-xlg-inline-block
              d-md-inline-block
              d-sm-none
              d-none
            "
            data-toggle-pin="sidebar"
          >
            <i class="pg-icon"></i>
          </button>
        </div>
      </div>
      <!-- END SIDEBAR MENU HEADER-->
      <!-- START SIDEBAR MENU -->
      <div class="sidebar-menu">
        <!-- BEGIN SIDEBAR MENU ITEMS-->
        <template>
          <ul class="menu-items">
            <li class="m-t-20">
              <NuxtLink to="/dashboard" class="detailed">
                <span class="title">Dashboard</span>
                <span class="details">12 New Updates</span>
              </NuxtLink>
              <span class="icon-thumbnail"><i class="pg-icon">home</i></span>
            </li>

              <li class="">
              <NuxtLink to="/calendar" class="detailed">
                <span class="title">Calendar</span>
              </NuxtLink>
              <span class="icon-thumbnail"><i class="pg-icon">calendar</i></span>
            </li>

            <li class="">
              <a href="javascript:;"
                ><span class="title">Menu Levels</span>
                <span class="arrow"></span
              ></a>
              <span class="icon-thumbnail"
                ><i class="pg-icon">menu_level</i></span
              >
              <ul class="sub-menu">
                <li>
                  <NuxtLink to="/level">Level 1</NuxtLink>
                  <span class="icon-thumbnail"><i class="pg-icon">l1</i></span>
                </li>
                <li>
                  <a href="javascript:;"
                    ><span class="title">Level 2</span>
                    <span class="arrow"></span
                  ></a>
                  <span class="icon-thumbnail"><i class="pg-icon">L2</i></span>
                  <ul class="sub-menu">
                    <li>
                      <NuxtLink to="/gmap">Googel Map</NuxtLink>
                      <span class="icon-thumbnail"
                        ><i class="pg-icon">sm</i></span
                      >
                    </li>
                    <li>
                      <NuxtLink to="/vmap">Vector mao</NuxtLink>
                      <span class="icon-thumbnail"
                        ><i class="pg-icon">sm</i></span
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </template>

        

        <div class="clearfix"></div>
      </div>
      <!-- END SIDEBAR MENU -->
    </nav>
    <!-- END SIDEBAR -->
    <!-- END SIDEBPANEL-->
</template>