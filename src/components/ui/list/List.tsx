import {
  ListItemIcon,
  ListItemText,
  List as MuiList,
  ListItem as MuiListItem,
  type ListItemTextProps,
  type ListProps,
} from '@mui/material';
import React, { type ReactNode } from 'react';

type Item = {
  id: string | number;
  icon?: ReactNode | string;
  primary: string;
  secondary?: string;
  onClick?: () => void;
  textProps?: Partial<ListItemTextProps>;
  customContent?: ReactNode;
};

type Props = {
  items: Item[];
  className?: string;
  itemClassName?: string;
  dense?: boolean;
} & ListProps;

const List: React.FC<Props> = ({
  items,
  className = '',
  itemClassName = '',
  dense = false,
  ...props
}): ReactNode => {
  return (
    <MuiList className={className} dense={dense} {...props}>
      {items.map(({ id, icon, primary, secondary, onClick, textProps, customContent }) => (
        <MuiListItem
          key={id}
          {...(onClick ? { component: 'div', button: true, onClick } : {})}
          className={itemClassName}
        >
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          {customContent ? (
            customContent
          ) : (
            <ListItemText primary={primary} secondary={secondary} {...textProps} />
          )}
        </MuiListItem>
      ))}
    </MuiList>
  );
};

export default List;
