import { Tab as MuiTab, Tabs as MuiTabs, type TabsProps } from '@mui/material';
import React, { useEffect, useState, type ReactNode } from 'react';
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
  value?: number;
  onChange?: (index: number) => void;
  className?: string;
  contentClassName?: string;
  contentHeight?: string | number;
}

const Tabs: React.FC<Props> = ({
  tabs,
  defaultIndex = 0,
  value,
  onChange,
  className = '',
  contentClassName = '',
  contentHeight,
  ...props
}) => {
  const isControlled = value !== undefined;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    if (isControlled) setActiveIndex(value!);
  }, [value]);

  const handleChange = (_: unknown, newIndex: number) => {
    if (!isControlled) setActiveIndex(newIndex);
    if (onChange) onChange(newIndex);
  };

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 'var(--tabs-fo-border-radius)',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ pt: 1.5, pb: 0 }}>
        <MuiTabs
          value={activeIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          slotProps={{
            indicator: {
              sx: { display: 'none' },
            },
          }}
          sx={{
            width: 'fit-content',
            '& .MuiTabs-flexContainer': {
              display: 'inline-flex',
            },
          }}
          {...props}
        >
          {tabs.map((tab, idx) => (
            <MuiTab
              key={tab.id ?? idx}
              label={tab.label}
              disabled={tab.disabled}
              sx={{ minWidth: 'unset' }}
            />
          ))}
        </MuiTabs>
      </Box>

      <Box
        className={contentClassName}
        sx={{
          px: '1rem',
          py: '1rem',
          backgroundColor: 'var(--tabs-fo-clr-bg, #ffffff)',
          borderTopRightRadius: 'var(--tabs-fo-border-radius)',
          borderBottomLeftRadius: 'var(--tabs-fo-border-radius)',
          borderBottomRightRadius: 'var(--tabs-fo-border-radius)',
          overflow: 'hidden',
          height: contentHeight ?? '100%',
        }}
      >
        <Box
          sx={{
            height: contentHeight ?? '100%',
            overflowY: 'auto',
          }}
        >
          {tabs[activeIndex]?.content}
        </Box>
      </Box>
    </Box>
  );
};

export default Tabs;
