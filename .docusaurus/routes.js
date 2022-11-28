import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '379'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '81b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8ea'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ded'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ac5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '092'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '4b9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '48b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7e1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'de1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '747'),
    exact: true
  },
  {
    path: '/blog/welcome-docusaurus-v2',
    component: ComponentCreator('/blog/welcome-docusaurus-v2', '401'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'fad'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', 'c10'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'fb5'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '770'),
    routes: [
      {
        path: '/docs/Digital-Hub/assessments',
        component: ComponentCreator('/docs/Digital-Hub/assessments', 'e3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Digital-Hub/commitment-students',
        component: ComponentCreator('/docs/Digital-Hub/commitment-students', 'c54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Digital-Hub/learning-leadership',
        component: ComponentCreator('/docs/Digital-Hub/learning-leadership', '3f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Digital-Hub/personal-philosophy',
        component: ComponentCreator('/docs/Digital-Hub/personal-philosophy', 'cbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Digital-Hub/professional-development',
        component: ComponentCreator('/docs/Digital-Hub/professional-development', '2c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Digital-Hub/teaching-competencies',
        component: ComponentCreator('/docs/Digital-Hub/teaching-competencies', '1f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/list-of-works',
        component: ComponentCreator('/docs/list-of-works', '772'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '643'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
