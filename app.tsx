import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { TestSyntheticEvent } from './src/pages/test-synthetic-event';

import { routes } from './src/routes';

import './style.css';

export default function App() {
  return (
    <div>
      <nav>
        {routes?.map((route) => (
          <Link to={route.path}>{route.title}</Link>
        ))}
      </nav>

      <Routes>
        <Route path="/test-synthetic-event" element={<TestSyntheticEvent />} />
        {routes?.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
