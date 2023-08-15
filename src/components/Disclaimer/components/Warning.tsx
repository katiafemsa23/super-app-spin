import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseDisclaimer from './BaseDisclaimer';

interface Props {
  text: string;
  testID?: string;
}

const Warning = ({ text, testID }: Props) => {
  const theme = useTheme();

  return (
    <BaseDisclaimer
      text={text}
      testID={testID}
      backgroundColor={theme.colors.surface_paused}
      textColor={'black'}
      iconColor={theme.colors.content_paused}
    />
  );
};

export default Warning;
