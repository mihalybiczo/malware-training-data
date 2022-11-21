'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;
const modifyPackages = blueprintHelpers.modifyPackages;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;

const generateFakePackageManifest = require('../helpers/generate-fake-package-manifest');
const fixture = require('../helpers/fixture');

describe('Blueprint: helper-test', function () {
  setupTestHooks(this);

  describe('in app', function () {
    beforeEach(function () {
      return emberNew();
    });

    describe('with ember-cli-qunit@4.1.0', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-cli-qunit', dev: true },
        ]);
        generateFakePackageManifest('ember-cli-qunit', '4.1.0');
      });

      it('helper-test foo/bar-baz', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/integration.js')
          );
        });
      });

      it('helper-test foo/bar-baz', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/integration.js')
          );
        });
      });
    });

    describe('with ember-cli-qunit@4.2.0', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-cli-qunit', dev: true },
        ]);
        generateFakePackageManifest('ember-cli-qunit', '4.2.0');
      });

      it('helper-test foo/bar-baz', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/rfc232.js')
          );
        });
      });
    });

    describe('with ember-cli-mocha@0.11.0', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-cli-mocha', dev: true },
        ]);
        generateFakePackageManifest('ember-cli-mocha', '0.11.0');
      });

      it('helper-test foo/bar-baz', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/mocha.js')
          );
        });
      });
    });

    describe('with ember-cli-mocha@0.12.0', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-cli-mocha', dev: true },
        ]);
        generateFakePackageManifest('ember-cli-mocha', '0.12.0');
      });

      it('helper-test foo/bar-baz for mocha', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/mocha-0.12.js')
          );
        });
      });
    });

    describe('with ember-mocha@0.14.0', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-mocha', dev: true },
        ]);
        generateFakePackageManifest('ember-mocha', '0.14.0');
      });

      it('helper-test foo/bar-baz for mocha', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/mocha-rfc232.js')
          );
        });
      });
    });
  });

  describe('in addon', function () {
    beforeEach(function () {
      return emberNew({ target: 'addon' });
    });

    describe('with ember-cli-qunit@4.1.0', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-cli-qunit', dev: true },
        ]);
        generateFakePackageManifest('ember-cli-qunit', '4.1.0');
      });

      it('helper-test foo/bar-baz', function () {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], (_file) => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js')).to.equal(
            fixture('helper-test/integration.js')
          );
        });
      });
    });

    describe('with ember-qunit (default)', function () {
      it('helper-test foo', function () {
        return emberGenerateDestroy(['helper-test', 'foo'], (_file) => {
          expect(_file('tests/integration/helpers/foo-test.js')).to.equal(
            fixture('helper-test/rfc232-addon.js')
          );
        });
      });
    });

    describe('with ember-mocha@0.16.2', function () {
      beforeEach(function () {
        modifyPackages([
          { name: 'ember-qunit', delete: true },
          { name: 'ember-mocha', dev: true },
        ]);
        generateFakePackageManifest('ember-mocha', '0.16.2');
      });

      it('helper-test foo', function () {
        return emberGenerateDestroy(['helper-test', 'foo'], (_file) => {
          expect(_file('tests/integration/helpers/foo-test.js')).to.equal(
            fixture('helper-test/mocha-rfc232-addon.js')
          );
        });
      });
    });
  });
});
