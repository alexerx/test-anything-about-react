import React, { useEffect } from 'react';
import { Stack, Button } from '@chakra-ui/react';

/**
 * 结论：
 *
 */

export const TestSyntheticEvent = () => {
  const handleSyntheticClick = () => {
    console.log('synthetic event');
  };

  const handleNativeClick = () => {
    console.log('native event');
  };

  useEffect(() => {
    document
      .getElementById('btn-native')
      .addEventListener('click', handleNativeClick);
    document
      .getElementById('btn-both')
      .addEventListener('click', handleNativeClick);
  }, []);

  return (
    <Stack direction="row" spacing={4} align="center">
      <Button onClick={handleSyntheticClick}>synthetic only</Button>
      <Button id="btn-native">native only</Button>
      <Button id="btn-both" onClick={handleSyntheticClick}>
        native + synthetic
      </Button>
    </Stack>
  );
};
