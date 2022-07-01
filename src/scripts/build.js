const { name, version } = require('../../package.json');
const { exec } = require('child_process');

exec(
  `npx vue-cli-service build --target lib --formats umd-min --no-clean --dest ./build --name "${name}-${version}.[chunkhash]" src/App.vue`
);
