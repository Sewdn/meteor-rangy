Package.describe({
  name: 'sewdn:rangy',
  summary: "A cross-browser range and selection library",
  version: "1.3.0_2",
  git: "https://github.com/Sewdn/meteor-rangy.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use(['jquery'], 'client');
  api.add_files([
    'lib/lib/rangy-core.js',
    'lib/lib/rangy-classapplier.js',
    'lib/lib/rangy-highlighter.js',
    'lib/lib/rangy-selectionsaverestore.js',
    'lib/lib/rangy-serializer.js',
    'lib/lib/rangy-textrange.js',
    'export.js'
  ], 'client');

  api.export('rangy');
});