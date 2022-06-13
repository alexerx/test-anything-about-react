import React, { useEffect, useState } from 'react';
import { SubA } from './sub-a';
import './sub-a';
import './sub-b';

export interface TestImportExecutionProps {}

/**
 * 结论：
 * 只会alert一次，num只会加1
 * 说明文件中的代码只会执行一次
 */

export const TestImportExecution: React.FC<TestImportExecutionProps> = (
  props
) => {
  return (
    <div>
      <SubA />
      <SubA />
      <SubA />
    </div>
  );
};
