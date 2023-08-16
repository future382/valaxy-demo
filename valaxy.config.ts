import { defineConfig } from 'valaxy';
import type { ThemeConfig } from 'valaxy-theme-yun';

/**
 * User Config
 */
export default defineConfig<ThemeConfig>({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'Adkimsm の 小站',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },
});
