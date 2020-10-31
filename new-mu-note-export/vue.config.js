// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '' // если тут пустая строка то при билде можно будет открыть локально файл нтмл а если будем на сервер загружать то нужен слеш '/'.
    : '/',
  outputDir: 'dist', // Каталог, в котором при запуске vue- cli - service build будут создаваться файлы сборки для production
  productionSourceMap: false,
}