const winston = require('winston');
const request = require('request');
const axios = require('axios');
const jsonfile = require('jsonfile');
const fs = require('fs');

var file =
  'C:/Users/Nick/Desktop/MobaDraft/client/src/components/hots/Heroes/hotsHeroes.json';
// var file = '/hotsHeroes.json';

var hotsApiHeroes = 'http://hotsapi.net/api/v1/heroes';

module.exports = {
  getHotsHeroes: function(url, callback) {
    fs.truncate(file, 0, function() {
      winston.info('Old Heroes List Deleted');
    });
    let heroesList = [];
    axios.get(url).then(function(res) {
      for (var i = 0; i < res.data.length; i++) {
        let hero = {
          name: res.data[i].name,
          role: res.data[i].role,
          type: res.data[i].type,
          icon: res.data[i].icon_url['92x93']
        };
        heroesList.push(hero);
        jsonfile.writeFile(file, hero, { flag: 'a' }, function(err) {
          console.error(err);
        });
      }
    });
  }
};
