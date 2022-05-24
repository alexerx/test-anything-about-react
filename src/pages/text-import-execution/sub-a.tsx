import React, { useEffect, useState } from 'react';

export interface SubAProps {
  a?: string;
}

alert('suba');

export const SubA: React.FC<SubAProps> = (props) => {
  return <div>suba</div>;
};
