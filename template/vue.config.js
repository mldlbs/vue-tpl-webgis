const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = 'webgis 项目'
const plugins = []
const minimizer = []
let isProd = false
if (process.env.NODE_ENV !== 'development') {
  isProd = true
  minimizer.push(new TerserPlugin({
    minify: TerserPlugin.uglifyJsMinify,
    terserOptions: {
      compress: {
        drop_console: true
      },
      output: {
        comments: false
      }
    }
  }))
}

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',

  css: {
    loaderOptions: {
      sass: {},
      scss: {}
    }
  },

  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        // vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src')
      },
      extensions: ['.js', '.vue', '.json', '.css', '.node']
    },
    entry: {
    },
    output: {
    },
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    },
    optimization: {
      minimize: isProd,
      minimizer: minimizer
    },
    plugins: plugins,
    externals: {
    },
    devServer: {
      host: '0.0.0.0',
      port: 10000,
      proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [process.env.VUE_APP_BASE_API]: {
          // target: `http://localhost:9093/`,
          target: `http://0.0.0.0:81/`,
          changeOrigin: true,
          pathRewrite: {
            ['^' + process.env.VUE_APP_BASE_API]: ''
          }
        }
      },
      disableHostCheck: true
    }
  },

  chainWebpack: (config) => {
    /** 删除懒加载模块的 prefetch preload，降低带宽压力(使用在移动端) */
    config.plugins.delete('prefetch').delete('preload')

    // set svg-sprite-loader
    config.plugin('define').tap((args) => {
      Object.assign(args[0], {
        AtV: JSON.stringify(require('./package.json').version),
        ReleaseTime: new Date().getTime()
      })
      return args
    })

    config.resolve.alias
      .set('@pkg', path.resolve(__dirname, 'packages')) // prettier-ignore
  }
}
