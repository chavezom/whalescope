var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [
    {
      Id: 'ba5133c87f32bc1001bdf92745f1dd3631ebc232a62e7064ec7a1e4fc94c4386',
      Names: [ '/lonely_goldstine' ],
      Image: 'hello-world',
      Command: '/hello',
      Created: 1442600535,
      Ports: [],
      Labels: {},
      Status: 'Exited (0) 2 hours ago',
      HostConfig: { NetworkMode: 'default' }
    }
  ];
  res.render('index', { title: 'WhaleScope', data: data, });
});

/* GET container page. */
router.get('/container', function(req, res, next) {
  var container_data = {
    'container': 'determined_shockley',
    'cpu': '0.00%',
    'mem': '884 KiB/1.961 GiB',
    'mem_percent': '0.04%',
    'net_io': '1,456 KB/648 B'
  };

  var chart = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }
  ];
  res.render('container', { title: 'WhaleScope', data: container_data, charts: JSON.stringify(chart)});
});

module.exports = router;
