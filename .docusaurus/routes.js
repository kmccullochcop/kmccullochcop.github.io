import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '075'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7e1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '981'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '4aa'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '6c7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '3dc'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'de1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'bd5'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'cea'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '4d3'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'fae'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c26'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ebf'),
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
