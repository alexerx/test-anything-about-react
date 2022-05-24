import React from 'react';
import { TestSyntheticEvent } from '../pages/test-synthetic-event';
import { TestImportExecution } from '../pages/text-import-execution';

export const routes = [
  {
    path: '/test-synthetic-event',
    title: '测试合成事件',
    element: <TestSyntheticEvent />,
  },
  {
    path: '/text-import-execution',
    title: '测试合成事件',
    element: <TestImportExecution />,
  },
];
