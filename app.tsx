import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Stack, Button } from '@chakra-ui/react';

import { routes } from './src/routes';

import './style.css';

export default function App() {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        {routes?.map((route) => (
          <Button>
            <Link to={route.path}>{route.title}</Link>
          </Button>
        ))}
      </Stack>

      <Routes>
        {routes?.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
