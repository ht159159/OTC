module.exports = {
	lintOnSave: false,
    chainWebpack: config => {
        if (process.env.NODE_ENV === "development") {
            -config.output.filename("[name].[hash].js").end();
        }
    },
	devServer: {
    // public: "202.39.176.70:8080",
    disableHostCheck: true
	},
	

    productionSourceMap: false,

}