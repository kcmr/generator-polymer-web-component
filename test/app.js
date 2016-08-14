'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-polymer-web-component:app', function () {
  context('using valid name for web component', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'component-name'
        })
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        '.editorconfig',
        '.eslintrc',
        '.gitattributes',
        '.gitignore',
        'bower.json',
        'gulpfile.js',
        'index.html',
        'package.json',
        'README.md',
        'wct.conf.js',
        'demo/index.html',
        'src/component-name.html',
        'src/component-name.js',
        'src/component-name.css',
        'test/index.html',
        'test/component-name-test.html'
      ]);
    });
  });
});
