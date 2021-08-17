<template>
  <div class="page-content-wrapper full-height">
    <div class="content full-height">
      <div id="myCalendar" class="full-height"></div>
        <div class="quickview-wrapper calendar-event" id="calendar-event">
            <div class="view-port clearfix" id="eventFormController">
              <div class="view bg-white">
                <div class="scrollable">
                  <div class="p-l-15 p-r-20 p-t-20">
                    <a class="pg-icon text-color link pull-right" data-toggle="quickview" data-toggle-element="#calendar-event" href="#">close</a>
                    <h4 class="m-b-5 m-t-0" id="event-date">&amp;</h4>
                    <div class="d-flex m-b-20 fs-14">
                      <i class="pg-icon m-r-5">time</i>
                      <span class="m-r-5" id="lblfromTime"></span> <span class="hint-text">to</span>
                      <span class="m-l-5" id="lbltoTime"></span>
                    </div>
                  </div>
                  <div class="p-t-15">
                    <input id="eventIndex" name="eventIndex" type="hidden">
                    <div class="form-group-attached">
                      <div class="form-group form-group-default ">
                        <label>Title</label>
                        <input type="text" class="form-control" id="txtEventName" name="" placeholder="event name">
                      </div>
                      <div class="row clearfix">
                        <div class="col-sm-9">
                          <div class="form-group form-group-default">
                            <label>Location</label>
                            <input type="text" class="form-control" id="txtEventLocation" placeholder="name of place" name="">
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="form-group form-group-default">
                            <label>Code</label>
                            <input type="text" class="form-control" id="txtEventCode" name="lastName">
                          </div>
                        </div>
                      </div>
                      <div class="row clearfix">
                        <div class="form-group form-group-default">
                          <label>Note</label>
                          <textarea class="form-control" placeholder="description" id="txtEventDesc"></textarea>
                        </div>
                      </div>
                      <div class="row clearfix cursor">
                        <div class="form-group form-group-default" data-navigate="view" data-view-port="#eventFormController" data-view-animation="push-parrallax">
                          <label>Alerts</label>
                          <div class="p-t-10">
                            <span class="pull-right p-r-10 p-b-5"><i class="pg-icon">chevron_right</i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-l-15 p-r-15 p-t-20 d-flex">
                    <button aria-label="" id="eventSave" class="btn btn-complete btn-block">Save Event</button>
                    <button aria-label="" id="eventDelete" class="btn btn-default m-l-10"><i class="pg-icon">trash</i></button>
                  </div>
                </div>
              </div>
              <div class="view bg-white">
                <div class="navbar navbar-default navbar-sm">
                  <div class="navbar-inner">
                    <a href="javascript:;" class="action p-l-10 link text-color" data-navigate="view" data-view-port="#eventFormController" data-view-animation="push-parrallax">
                      <i class="pg-icon">chevron_left</i>
                    </a>
                    <div class="view-heading">
                      <span class="font-montserrat text-uppercase fs-13">Alerts</span>
                    </div>
                    <a href="#" class="action p-r-10 pull-right link text-color">
                      <i class="pg-icon">search</i>
                    </a>
                  </div>
                </div>
                <p class="p-l-30 p-r-30 p-t-30"> This is a Demo</p>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "calendar",
  head: {
    script: [
      {
        src: "/plugins/interactjs/interact.min.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/plugins/moment/moment-with-locales.min.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/js/pages.calendar.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
      {
        src: "/js/calendar.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
    ],
  },
};
</script>