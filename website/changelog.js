var Changelog = require('generate-changelog');
var Fs = require('fs');

Changelog.generate({ patch: true, repoUrl: 'https://github.com/xycorp/web-developer.xyo.network-react.git' })
  .then(function (changelog) {
    Fs.writeFileSync('./CHANGELOG.md', changelog);    
  });