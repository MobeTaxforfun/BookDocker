module.exports = {
    title:'我的 Docker 筆記',
    description:'一個不成材的工程師的 Docker 筆記',
    base: '/BookDocker/',
    // theme: "book",
    themeConfig: {
        locales:{
            '/':{
                sidebar: [
                  ['/chapter1/one', '第一章'],
                  ['/chapter1/two', '第二章'],
                    // {
                    //   title: '第一章',
                    //   collapsable: false,
                    //   children: [
                    //     ['/chapter1/one', '第一小節'],
                    //     ['/chapter1/two', '第二小節'],
                    //   ]
                    // },
                    // {
                    //     title: '第二章',
                    //     collapsable: false,
                    //     children: [
                    //       ['/chapter2/one', '第一小節'],
                    //       ['/chapter2/two', '第二小節'],
                    //     ]
                    //   }
                ]
            }
        }
    },
    markdown:{
      extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
      }
    }
}