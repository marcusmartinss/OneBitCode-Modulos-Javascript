const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.22.6"
        }
    ]
]

module.exports = { presets }