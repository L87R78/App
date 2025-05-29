import { SvgIcon, type SvgIconProps } from '@mui/material';
import React from 'react';

export const createSvgIconFromString = (
  svgString: string,
  displayName: string
): React.FC<SvgIconProps> => {
  const SvgComponent: React.FC<SvgIconProps> = props => (
    <SvgIcon {...props}>
      {/* eslint-disable-next-line react/no-danger */}
      <g dangerouslySetInnerHTML={{ __html: svgString }} />
    </SvgIcon>
  );

  SvgComponent.displayName = displayName;
  return SvgComponent;
};
