//__dirname:代表当前文件所在目录的绝对路径
const HtmlWebpackPlugin=require('html-webpack-plugin')
const path=require('path')//用来解析路径相关的信息的模块
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={//配置对象C:\Users\古月\Desktop\vue_cli\webpack.config.js

  // 入口
  entry:{
    appp:path.resolve(__dirname,'src/index.js')
  },
  //开发服务器的配置
  devServer: {
    open: true, // 自动打开浏览器
    //quiet: true, // 不做太多日志输出
    proxy:{
      //处理以/api开头路劲的请求
      //'/api':'http://localhost:3000'
      '/api':{
        target:'http://localhost:4000',//转发的目标地址
        pathRewrite:{
          '^/api':''  //转发请求时去除路径前面的/api
        },
        changeOrigin:true,//支持跨域，如果协议也不相同，必须加上
      }
    },
    historyApiFallback:true,//任意的404响应都被替代为index.html
    
  },

  // 出口
  output:{
    filename:'static/js/[name].bundle.js',//可以带路径
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',//引入打包的文件时路径以/开头
    
  },
  // 模块加载器
  module:{
    rules:[
      //处理ES6转ES5
      {
        test: /\.m?js$/,//用于匹配文件
        exclude: /(node_modules|bower_components)/,//排除
        include:[path.resolve(__dirname,'src')],//只针对哪些处理
        use: {
            loader: 'babel-loader',
            options: {
            presets: [
              ['@babel/preset-env',
              {//解决await  async
                useBuiltIns:'usage',//按需打包对应的polyfill语法
                'corejs':2,//处理一些新语法的实现 要想能用async 就必须yarn add -D @babel/runtime-corejs2
              }],
             ],//预设包：包含多个常用插件包的一个大包
             plugins:[
                ['babel-plugin-component',{
                  "libraryName": "mint-ui",//针对mint-ui库实现按需引入打包
                  "style": true//自动打包对应的css
                }]
                //Error: .plugins[0][1] must be an object, false, or undefined
            ]
          }
        },
        
      },
      //处理css
      {
        test: /\.css$/i,
        use: ["vue-style-loader", "css-loader"],

      },
      //处理图片
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'static/img/[name].[hash:7].[ext]',//相当于output.path
            },
          },
        ],
      },
      // 处理vue单文件组件模块
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },

    ]
  },
  // 插件
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',//将哪个页面作为模板页面处理（在根目录下查找）
      filename:'index.html',//生成页面（在output指定的path下）
    }),
    new VueLoaderPlugin(),
    
  ],
  //引入模块的解析
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名，先找 .js 依次找
    alias: { // 路径别名(简写方式)  就是引入模块的路径
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
      '@':path.resolve(__dirname,'src'),
      '@componets':path.resolve(__dirname,'src/components/')
    }
  },
//开启source-map 调试
  devtool:'eval-cheap-module-source-map',
  

}