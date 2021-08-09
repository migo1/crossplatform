<template>
  <div>
    <SideBar />
    <!-- <TopBar /> -->
  <!-- START PAGE-CONTAINER -->
    <div class="page-container ">
      <!-- START HEADER -->
     <Header />
      <!-- END HEADER -->
      <!-- START PAGE CONTENT WRAPPER -->
      <div class="page-content-wrapper ">
        <!-- START PAGE CONTENT -->
        <div class="content ">
          <!-- START JUMBOTRON -->
          <BreadCrumb />
          <!-- END JUMBOTRON -->
          <!-- START CONTAINER FLUID -->
          <div class=" container-fluid   container-fixed-lg">

             <Nuxt />
            <!-- BEGIN PlACE PAGE CONTENT HERE -->
            <!-- END PLACE PAGE CONTENT HERE -->
          </div>
          <!-- END CONTAINER FLUID -->
        </div>
        <!-- END PAGE CONTENT -->
        <!-- START COPYRIGHT -->
        <!-- START CONTAINER FLUID -->
        <!-- START CONTAINER FLUID -->
          
        <!-- END COPYRIGHT -->
      </div>
      <!-- END PAGE CONTENT WRAPPER -->
    </div>
   <!--START QUICKVIEW -->
  <QuickView />
    <!-- END QUICKVIEW-->
    <!-- START OVERLAY -->
    <Overlay />
   
    <!-- <Footer /> -->
  </div>
</template>