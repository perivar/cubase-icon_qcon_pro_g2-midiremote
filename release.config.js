const config = require('@bjoluc/semantic-release-config-npm')

config.plugins = config.plugins.map((plugin) => {
    // Reconfigure the GitHub plugin's `assets` option
    if (Array.isArray(plugin) && plugin[0] === '@semantic-release/github') {
        plugin[1].assets = 'dist/icon/qcon_pro_g2/*.js'
    }

    return plugin
})

module.exports = config
