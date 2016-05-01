var config = {
  // Twitter API (Proxy) URL
  baseUrl: 'http://127.0.0.1:7890',

  debug: false,
  title: 'PyCon Israel 2016',

  search: 'from:@pyconil OR @pyconil OR #pyconil',
  // list: 'fullfrontalconf/delegates11', // optional, just comment it out if you don't want it

  timings: {
    showNextScheduleEarlyBy: '10m', // show the next schedule 10 minutes after the previous starts
    defaultNoticeHoldTime: '15s',
    defaultNoticeInterval: '2m',
    initialNoticeDelay: '2m',
    showTweetsEvery: '3s'
  }
};

// allows reuse in the node script
if (typeof exports !== 'undefined') {
  module.exports = config;
}
