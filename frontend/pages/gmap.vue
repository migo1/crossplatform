<template>
    <div>
           <div class="map-controls">
            <div class="pull-left">
              <div class="btn-group-vertical" data-toggle="buttons-radio">
                <button aria-label="" id="map-zoom-in" class="btn btn-success btn-xs btn-icon"><i class="pg-icon">add</i>
                </button>
                <button aria-label="" id="map-zoom-out" class="btn btn-success btn-xs btn-icon"><i class="pg-icon">minus</i>
                </button>
              </div>
            </div>
          </div>
           <div class="map-container full-width full-height">
            <div id="google-map" class="full-width full-height"></div>
          </div>
    </div>
</template>

<script>
export default {
      head: {
    script: [
      {
        src: "https://maps.googleapis.com/maps/api/js?v=3.exp",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/js/google_map.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/js/scripts.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
    ],
  },
}
</script>