module.exports = {
    //网站的标题
    title: 'flandre',
    //网站的描述
    description: 'Flandre\'s test porject' ,
    //指定vuepress build的输出目录,
    dest:"./dist",
    //启动的端口
    port:'8080',
    //注入到htmlhead中的数据
    head:[
      ['link',{rel:'icon',href:'/img/logo.jpg'}],
    ],
    //指定dev serve 的主机名
    host:'0.0.0.0',
    //指定客户端文件的临时目录
    temp:"path/to/@vuepress/core/.temp",
    //提供多语言的配置
    locales:undefined,
    //一个函数用来控制是否生成 <link rel="prefetch"> 资源提示
    shouldPrefetch:()=>true,
    //加快编译速度，指定路径输出
    cache:true,
    //需要额外监听的文件
    extraWatchFiles:[/*'.vuepress/foo.js'*/],
    //
    markdown:{
      //是否在每个代码块的左侧显示行号。
      lineNumbers:true,
      //一个将文本转化为slug函数，
      //slugify:
    },
    //当年使用自定义主题时候会用到它
    //发布到npm的你可以主页引用他
    //theme:'vu-epress-theme-xxx',
    //主题的缩写
    //theme:'xxx',
    //scoped packages 中也是这样的使用
    //theme: '@org/vuepress-themexxx',
    //为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
    //默认主题配置
    themeConfig: {
      //通过logo给导航栏添加logo，logo应该放置在公共目录
      logo:'/img/logo.jpg',
      //给导航栏添加一些连接
      nav:require("./nav.js"),
      //禁用导航栏
      //navbar:false,
      // 侧边栏生效 配置侧边栏
      sidebar:require("./sidebar.js"),
      //嵌套的标题连接
      sidebarDepth: 2,
      // 来显示所有页面的标题链接：
      //displayAllHeaders:true,
      //活动的标签连接
      //activeHeaderLinks:false,
      //最后更新时间 最后一个git提交时间
      lastUpdated: 'Last Updated',
      // 上一篇和下一篇连接 根据当前页面的侧边连的顺序获取的 
      //通过下面来关闭
      //nextLinks:false
      //prevLinks:false
      searchMaxSuggestion: 10,
    },
    //使用插件
    plugins:[
      //require("./my-plugin.js"),
      //npm中的使用
      //'vuepress-plugin-xxx'
    ]
  }
