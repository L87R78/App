import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  Typography,
  type AccordionProps,
} from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  summary: string | ReactNode;
  children: ReactNode;
  expanded?: boolean;
  onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  className?: string;
} & AccordionProps;

const Accordion: React.FC<Props> = ({
  summary,
  children,
  expanded,
  onChange,
  className = '',
  ...props
}): ReactNode => {
  return (
    <MuiAccordion
      expanded={expanded}
      onChange={onChange}
      className={className}
      disableGutters
      square
      {...props}
    >
      {/* TODO: ADD ICON */}
      <AccordionSummary expandIcon={null}>
        {typeof summary === 'string' ? (
          <Typography fontWeight={600}>{summary}</Typography>
        ) : (
          summary
        )}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
