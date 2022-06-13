import React, { useEffect, useState } from 'react';
import './sub-a';

export interface SubAProps {
  a?: string;
}

export const SubB: React.FC<SubAProps> = (props) => {
  return <div>subb</div>;
};
