const path = require('path');
const AdmZip = require('adm-zip');
const initAppcast = require('./init-appcast');
const plugInfo = require('../src/info.json');

const pkgName = 'google-translate';
const pkg = path.resolve(__dirname, `../release/${pkgName}-v${plugInfo.version}.aiplugin`);

const zip = new AdmZip();
zip.addLocalFolder(path.resolve(__dirname, `../dist/${pkgName}.aiplugin`));
zip.writeZip(pkg);

initAppcast();
