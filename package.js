Package.describe({
  name: 'emars:accounts-reddit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for Reddit accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/emars/accounts-reddit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('accounts-base', ['client','server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('emars:reddit', ['client', 'server']);
  api.use('http', ['client', 'server']);

  api.addFiles('reddit.js');
});
