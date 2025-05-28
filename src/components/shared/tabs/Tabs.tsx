import { Tab as MuiTab, Tabs as MuiTabs, type TabsProps } from '@mui/material';
import React, { useState, type ReactNode } from 'react';
import Box from '../layout/box/Box';

interface TabItem {
  label: string;
  content: ReactNode;
  disabled?: boolean;
  id?: string | number;
}

interface Props extends Omit<TabsProps, 'value' | 'onChange'> {
  tabs: TabItem[];
  defaultIndex?: number;
  className?: string;
  contentClassName?: string;
}

const Tabs: React.FC<Props> = ({
  tabs,
  defaultIndex = 0,
  className = '',
  contentClassName = '',
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <Box className={className} sx={{ backgroundColor: 'transparent' }}>
      <Box sx={{ display: 'inline-flex', backgroundColor: 'transparent' }}>
        <MuiTabs value={activeIndex} onChange={(_, val) => setActiveIndex(val)} {...props}>
          {tabs.map((tab, idx) => (
            <MuiTab key={tab.id ?? idx} label={tab.label} disabled={tab.disabled} />
          ))}
        </MuiTabs>
      </Box>

      <Box className={contentClassName}>{tabs[activeIndex]?.content}</Box>
    </Box>
  );
};

export default Tabs;
