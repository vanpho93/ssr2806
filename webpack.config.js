module.exports = {
    entry: './src/app.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: "cheap-eval-source-map"
};
