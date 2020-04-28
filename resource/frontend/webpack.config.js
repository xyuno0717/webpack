// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require('webpack');
const path = require('path');

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "../js/index.js",
    mode: "production",
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: path.resolve(__dirname, '../../js'),
        // 出力ファイル名
        filename: "bundle.js"
        // hash値自動付与 変更時はwebpack再起動
        // filename: "bundle_[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss/,
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            //相対パス利用する
                            url: false,
                        },
                    },
                    "sass-loader",
                ]
            }
        ]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //     }),
    // ],
};