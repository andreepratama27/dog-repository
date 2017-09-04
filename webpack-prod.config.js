const path = require('path')
const webpack = require('webpack')

module.exports = {

    entry: path.resolve(__dirname, 'index.js'),

    resolve: {
        alias: {
            Action: path.resolve(__dirname, 'actions/'),
            Component: path.resolve(__dirname, 'components/'),
            Container: path.resolve(__dirname, 'containers/'),
            Reducer: path.resolve(__dirname, 'reducers/'),
            Style: path.resolve(__dirname, 'style')
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
}
