Package.describe({
  name: 'chroma:keen-js',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'send events to keen.io with client side keen-js via bower',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ChromaPDX/meteor-keen-js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "keen-js": "3.2.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['mquandalle:bower@0.1.11'], 'client');
  api.addFiles([
    'bower.json',
    'keen-js.js'
  ], 'client');
  api.export('keen', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chroma:keen-js');
  api.addFiles('keen-js-tests.js');
});
