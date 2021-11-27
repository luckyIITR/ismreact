module.exports = {
    plugins: [
        {
            plugin: require('craco-plugin-scoped-css'),
            plugins: ["babel-plugin-react-scoped-css"]
        },
    ],
}
