module.exports = {
    title: 'WheelHub',
    base: '/WheelHub/',
    description: '基于 VUE2 搭建的 UI 框架',
    chainWebpack: config => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    },
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'GitHub', link: 'https://github.com/Leslie-LiangGangwei/WheelHub/'},
        ],
        sidebar: [
            {
                title: '入门指南',
                children: [
                    '/start/install.md'
                ]
            },
            {
                title: '组件展示',
                children: [
                    '/components/icon.md',
                    '/components/button.md',
                    '/components/input.md',
                    '/components/grid.md',
                    '/components/layout.md',
                    '/components/toast.md',
                    '/components/tabs.md',
                    '/components/popover.md',
                    '/components/collapse.md'
                ]
            }
            // {
            //     title: '单元测试',
            //     children: [
            //         '/test/test-why.md',
            //         '/test/test-how.md',
            //     ]
            // }
        ]
    }
}