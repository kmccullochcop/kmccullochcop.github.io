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
    component: ComponentCreator('/docs', '3cd'),
    routes: [
      {
        path: '/docs/list-of-works',
        component: ComponentCreator('/docs/list-of-works', '772'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Writing Samples/defining-the-word-wanting',
        component: ComponentCreator('/docs/Writing Samples/defining-the-word-wanting', '6b6'),
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
