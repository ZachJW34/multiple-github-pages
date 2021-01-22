import React from 'react';
import { Storybook, StorybookProps } from './storybook';

export default {
  component: Storybook,
  title: 'Storybook',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: StorybookProps = {};

  return <Storybook />;
};
