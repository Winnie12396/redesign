module.exports = {
  lintOnSave: false
}

const webpack = require("webpack");

module.exports = {
    //configureWebpack 是Vue CLI3.0 中用於配置 webpack 外掛引數的地方，你在這裡設定，會新建或者覆蓋 webpack 預設配置。
    //webpack ProvidePlugin 的含義是建立一個全域性的變數，使這個變數在 webpack 各個模組內都可以使用。這裡的配置含義是建立 '$'、'jQuery'、'window.jQuery' 三個變數指向 jquery 依賴，建立 'Popper' 變數指向 popper.js 依賴。
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
      }
      
}	 
