import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '301'),
    exact: true
  },
  {
    path: '/blog/2022/12/02/literacyasresource',
    component: ComponentCreator('/blog/2022/12/02/literacyasresource', '7b7'),
    exact: true
  },
  {
    path: '/blog/2022/12/03/reachingallstudents',
    component: ComponentCreator('/blog/2022/12/03/reachingallstudents', '1e1'),
    exact: true
  },
  {
    path: '/blog/2023/02/28/researchlessonplan',
    component: ComponentCreator('/blog/2023/02/28/researchlessonplan', '032'),
    exact: true
  },
  {
    path: '/blog/2023/02/28/seniorenglishreflection',
    component: ComponentCreator('/blog/2023/02/28/seniorenglishreflection', 'dc3'),
    exact: true
  },
  {
    path: '/blog/2023/03/01/Ads1lessonplan',
    component: ComponentCreator('/blog/2023/03/01/Ads1lessonplan', '3fe'),
    exact: true
  },
  {
    path: '/blog/2023/03/02/Ads2lessonplan',
    component: ComponentCreator('/blog/2023/03/02/Ads2lessonplan', '88a'),
    exact: true
  },
  {
    path: '/blog/2023/03/03/AdsSummative',
    component: ComponentCreator('/blog/2023/03/03/AdsSummative', '2d8'),
    exact: true
  },
  {
    path: '/blog/2023/03/21/NBE3Uunitplan',
    component: ComponentCreator('/blog/2023/03/21/NBE3Uunitplan', '351'),
    exact: true
  },
  {
    path: '/blog/2023/03/30/conceptualframeworkdraft',
    component: ComponentCreator('/blog/2023/03/30/conceptualframeworkdraft', 'a2e'),
    exact: true
  },
  {
    path: '/blog/2023/12/12/Grade7MathCurriculumMap',
    component: ComponentCreator('/blog/2023/12/12/Grade7MathCurriculumMap', 'c5d'),
    exact: true
  },
  {
    path: '/blog/2024/02/28/',
    component: ComponentCreator('/blog/2024/02/28/', '3bb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7e1'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', 'cf9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'de1'),
    exact: true
  },
  {
    path: '/blog/tags/assessment-activities',
    component: ComponentCreator('/blog/tags/assessment-activities', '520'),
    exact: true
  },
  {
    path: '/blog/tags/eng-4-c',
    component: ComponentCreator('/blog/tags/eng-4-c', '036'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '747'),
    exact: true
  },
  {
    path: '/blog/tags/lesson-plans',
    component: ComponentCreator('/blog/tags/lesson-plans', 'dd6'),
    exact: true
  },
  {
    path: '/blog/tags/math',
    component: ComponentCreator('/blog/tags/math', '547'),
    exact: true
  },
  {
    path: '/blog/tags/nbe-3-u',
    component: ComponentCreator('/blog/tags/nbe-3-u', '01a'),
    exact: true
  },
  {
    path: '/blog/tags/practicum-year-1',
    component: ComponentCreator('/blog/tags/practicum-year-1', 'e39'),
    exact: true
  },
  {
    path: '/blog/tags/practicum-year-2',
    component: ComponentCreator('/blog/tags/practicum-year-2', 'fd8'),
    exact: true
  },
  {
    path: '/blog/tags/teaching-philosophy',
    component: ComponentCreator('/blog/tags/teaching-philosophy', '2aa'),
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
    component: ComponentCreator('/docs', 'f99'),
    routes: [
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
