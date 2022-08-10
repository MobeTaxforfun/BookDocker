module.exports = {
    title:'我的 Docker 筆記',
    description:'一個不成材的工程師的 Docker 筆記',
    base: '/BookDocker/',
    theme: "book",
    themeConfig: {
        locales:{
            '/':{
                sidebar: [
                    {
                      title: 'Overview',
                      collapsable: true,
                      children: [
                        ['/Docker/Why', 'Why Docker'],
                        ['/Docker/What', 'What is Docker'],
                        ['/Docker/How', 'How to Docker'],
                      ]
                    },
                    {
                      title: 'Image',
                      collapsable: true,
                      children: [
                        ['/Image/Introduction', 'Docker Image 簡介']
                      ]
                    },
                    {
                      title: 'Container',
                      collapsable: true,
                      children: [
                        ['/Container/Introduction', 'Docker Container 簡介']
                      ]
                    },
                    {
                      title: 'Repository',
                      collapsable: true,
                      children: [
                        ['/Repository/Introduction', 'Docker Repository 簡介']
                      ]
                    },
                    {
                      title: 'Other',
                      collapsable: true,
                      children: [
                        ['/Other/PersistenceIntroduction', 'Manage data (持久化)'],
                        ['/Other/NetworkIntroduction', 'Docker Network 簡介']
                      ]
                    },
                    {
                      title: 'Docker Compose',
                      collapsable: true,
                      children: [
                        ['/Compose/Introduction', 'Docker Compose 簡介']
                      ]
                    }
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