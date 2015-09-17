var express = require('express');
var router = express.Router();

var data = [
  {
    'container_id': 'b00c7ec6e166',
    'image': 'chavezom/graphops-api',
    'created': '4 weeks ago',
    'status': 'Up 4 weeks',
    'port': '0.0.0.0:80->10010/tcp',
    'name': 'graphops-api'
  },
  {
    'container_id': '6a74931c349e',
    'image': 'chavezom/graphops-monitor',
    'created': '4 weeks ago',
    'status': 'Up 4 weeks',
    'port': '',
    'name': 'api-graphops-monitor'
  },
  {
    'container_id': '29fcbe3bacb2',
    'image': 'chavezom/graphops-monitor',
    'created': '4 weeks ago',
    'status': 'Up 4 weeks',
    'port': '',
    'name': 'ui-graphops-monitor'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WhaleScope', data: data, });
});

module.exports = router;
