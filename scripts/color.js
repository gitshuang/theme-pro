const genCss = require('antd-pro-merge-less');
const path =  require('path')

genCss(path.join(process.cwd(),'src'), [
  {
    theme: 'dark',
    fileName: './public/dark.css',
  },
  {
    key: 'dust',
    fileName: './public/dust.css',
    modifyVars: {
      '@primary-color': '#F5222D',
      '@aaaaa-bbbb': '#F5222D'
    }
  },
  {
    key: 'mingQing',
    fileName: './public/mingQing.css',
    modifyVars: {
      '@primary-color': '#13C2C2',
    },
  },
  {
    key: 'pink',
    fileName: './public/pink.css',
    modifyVars: {
      '@primary-color': '#f576dc',
    },
  },
],{
  isModule: false,
  ignoreAntd: false,
  ignoreProLayout: true,
  cache: false
}).then(function () {
  console.log('🎊  build theme success');
}).catch(function (e) {
  console.log(e);
});