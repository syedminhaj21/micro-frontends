import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('ref marketing', ref);
    mount(ref.current);
  });

  return <div ref={ref} />;
};
