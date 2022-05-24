import React, { useEffect, useState } from 'react';
import { SubA } from './sub-a';

export interface TestImportExecutionProps {}

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
