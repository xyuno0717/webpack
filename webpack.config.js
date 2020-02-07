module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./js/index.js",
    mode: "development",
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "bundle.js"
    },
    module: {
        rules: [    
          // SASS
          {
            test: /\.scss/,
            use: [
                // linkタグに出力する機能
                "style-loader",
                // CSSをバンドルするための機能
                {
                  loader: "css-loader",
                  options: {
                    // オプションでCSS内のurl()メソッドの取り込みを禁止する
                    url: false,
                    // ソースマップの利用有無
                    sourceMap: enabledSourceMap,
      
                    // 0 => no loaders (default);
                    // 1 => postcss-loader;
                    // 2 => postcss-loader, sass-loader
                    importLoaders: 2
                  }
                },
                {
                  loader: "sass-loader",
                  options: {
                    // ソースマップの利用有無
                    sourceMap: enabledSourceMap
                  }
                }
              ]
          }
        ]
    },
};