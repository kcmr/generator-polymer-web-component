'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-web-component:app', () => {
  context('using valid name for web component', () => {
    before(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'component-name'
        })
        .toPromise();
    });

    it('creates expected files', () => {
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
