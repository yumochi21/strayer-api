var express = require('express');
var router = express.Router();

router.get('/:code', function(req, res, next) {
  var param = createLinks(req.params.code);
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

const createLinks = (code) => {
  let label = ''
  switch (code) {
    case '001':
      label = 'Java'
      break
    case '002':
      label = 'CSS'
      break
    case '003':
      label = 'HTML'
      break
    case '004':
      label = 'C#'
      break
    case '005':
      label = '機会学習'
      break
    case '006':
      label = 'ビジネス'
      break
    case '007':
      label = 'サンプル'
      break
    case '008':
      label = 'テスト'
      break
  }
  let ret = []
  for (let i = 1; i < 9; i++) {
    let link = {
      code: '00000' + i,
      category: code,
      label: label + i,
      url: 'https://google.co.jp/'
    }
    ret.push(link)
  }
  return ret
}

module.exports = router;
