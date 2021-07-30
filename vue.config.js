module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title= '我的相册'
                return args
            })
    }
}