import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { TestSyntheticEvent } from './pages/test-synthetic-event';

import './style.css';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/test-synthetic-event">测试合成事件</Link>
      </nav>

      <Routes>
        <Route path="/test-synthetic-event" element={<TestSyntheticEvent />} />
      </Routes>
    </div>
  );
}
