To generate a build file

npx vue-cli-service build --target lib --formats umd-min --no-clean --dest ./build --name "plugin-01.[chunkhash]" src/App.vue

Then copy the *umd.min.js and *css file to the server/build folder of the host app