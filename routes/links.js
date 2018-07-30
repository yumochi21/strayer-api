var express = require('express');
var router = express.Router();

router.get('/:code', function(req, res, next) {
  var param = getLink(req.params.code);
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

const getLink = (code) => {
  return {
    code: code,
    links: [
      {code: '00001', category: '0001', label: 'Java1', url: 'https://google.co.jp/'},
      {code: '00002', category: '0001', label: 'Java2', url: 'https://google.co.jp/'},
      {code: '00003', category: '0001', label: 'Java3', url: 'https://google.co.jp/'},
      {code: '00004', category: '0001', label: 'Java4', url: 'https://google.co.jp/'},
      {code: '00005', category: '0001', label: 'Java5', url: 'https://google.co.jp/'},
      {code: '00006', category: '0001', label: 'Java6', url: 'https://google.co.jp/'},
      {code: '00007', category: '0001', label: 'Java7', url: 'https://google.co.jp/'}
    ]
  }
}

module.exports = router;
