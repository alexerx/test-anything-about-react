import React, { useEffect, useState } from 'react';

export interface SubAProps {
  a?: string;
}

let num = 0;
++num;

// alert('suba');

export const SubA: React.FC<SubAProps> = (props) => {
  // useEffect(() => {
  //   ++num;
  // }, []);
  return <div>suba, num: {num}</div>;
};
