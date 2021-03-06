const tasks = require('./tasks')

// tasks.replaceWebpack()
console.log('[Copy assets]')
console.log('--------------------------------')
tasks.copyAssets('dev')

console.log('[Webpack Dev]')
console.log('--------------------------------')
console.log('Load unpacked extensions with `./dev` folder.  (see https://developer.chrome.com/extensions/getstarted#unpacked)\n')
console.log('Please run `node devServer.js` in a separate window.')
exec('webpack --config webpack.config.dev.js --progress --profile --colors --watch --display-error-details')
