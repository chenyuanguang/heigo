module.exports = {
    title: 'Heigo',
    
    keywords: '集成dom操作api,jquery封装，jq封装，dom处理，框架，js框架，移动端dom操作，js常用方法继承，js扩展，js方法扩展，js，bom常用方法集成，js核心方法扩展，项目常用js方法',
    description: '集成jquery所有的常用方法,封装bom相关的一系列函数,封装常用的移动端事件,集成前端开发过程中常用的插件,针对字符串，数组，对象进行了方法的扩展，在项目开发可以更加专注业务',
    // serviceWorker: true,
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            {
                text: 'API',
                items: [
                    { text: 'dom', link: '/api/' },
                    { text: 'methodsExtends', link: '/api/methodsExtends' },
                    { text: 'bom', link: '/api/bom' },
                    { text: 'other', link: '/api/other' }
                ]
            },
            {
                text: '语言',
                items: [
                    { text: 'Chinese', link: '/' },
                    // { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            '/',
            '/installation',
            "/guide/",
            "/api/"
        ]
    }

}