<template>
  <div>
    <div class="map-controls">
      <div class="pull-left">
        <div class="btn-group-vertical" data-toggle="buttons-radio">
          <button aria-label="" class="btn btn-xs btn-icon">
            <i class="pg-icon">add</i>
          </button>
          <button aria-label="" class="btn btn-xs btn-icon">
            <i class="pg-icon">minus</i>
          </button>
        </div>
        <br />
        <a href="#" class="btn btn-xs m-t-10 clear-map btn-icon">
          <i class="pg-icon">expand</i>
        </a>
      </div>
      <div class="pull-left m-l-15">
        <form role="form">
          <div class="form-group form-group-default form-group-default-select2">
            <label>Country</label>
            <select
              id="country-list"
              data-placeholder="Search by locationg, tag, ID"
              data-init-plugin="select2"
            ></select>
          </div>
        </form>
      </div>
    </div>
    <div id="mapplic"></div>
  </div>
</template>
<script>
export default {
  head: {
    link: [
      {
        href: "/plugins/mapplic/css/mapplic.css",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    script: [
      {
        src: "/plugins/mapplic/js/hammer.min.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/plugins/mapplic/js/jquery.mousewheel.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/plugins/mapplic/js/mapplic.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/js/vector_map.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
    ],
  },
};
</script>