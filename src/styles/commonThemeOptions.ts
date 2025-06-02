import { createSvgIconFromString } from '../components';

const SelectIconDown = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#52AE30"/>
</svg>`;

const commonInputRootStyles = {
  borderRadius: 'var(--field-border-radius, 0.75rem)',
  backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
  fontSize: 'var(--typography-body1-font-size, 1rem)',
  '&.Mui-disabled': {
    backgroundColor: 'var(--clr-bg-disabled, hsl(0, 0%, 95%))',
    color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
  },
};

const commonNotchedOutlineStyles = {
  borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
  borderRadius: 'var(--field-border-radius, 0.75rem)',
};

const commonFocusedStyles = {
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--clr-primary)',
  },
};

const commonErrorStyles = {
  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--clr-danger, #ff435a)',
  },
};

export const commonThemeOptions = {
  typography: {
    h1: {
      fontSize: 'var(--typography-h1-font-size, 3.25rem)',
      fontWeight: 'var(--typography-h1-font-weight, 900)',
    },
    h2: {
      fontSize: 'var(--typography-h2-font-size, 3rem)',
      fontWeight: 'var(--typography-h2-font-weight, 700)',
    },
    h3: {
      fontSize: 'var(--typography-h3-font-size, 2.5rem)',
      fontWeight: 'var(--typography-h3-font-weight, 600)',
    },
    h4: {
      fontSize: 'var(--typography-h4-font-size, 2rem)',
      fontWeight: 'var(--typography-h4-font-weight, 400)',
    },
    h5: {
      fontSize: 'var(--typography-h5-font-size, 1.75rem)',
      fontWeight: 'var(--typography-h5-font-weight, 400)',
    },
    h6: {
      fontSize: 'var(--typography-h6-font-size, 1.25rem)',
      fontWeight: 'var(--typography-h6-font-weight, 600)',
    },
    body1: {
      fontSize: 'var(--typography-body1-font-size, 1rem)',
      fontWeight: 'var(--typography-body1-font-weight, 400)',
    },
    body2: {
      fontSize: 'var(--typography-body2-font-size, 0.85rem)',
      fontWeight: 'var(--typography-body2-font-weight, 500)',
      color: 'var(--clr-text-secondary, hsl(0, 0%, 45%))',
    },
    subtitle2: {
      fontSize: 'var(--typography-subtitle2-font-size, 0.85rem)',
      fontWeight: 'var(--typography-subtitle2-font-weight, 800)',
    },
    caption: {
      fontSize: 'var(--typography-caption-font-size, 0.5rem)',
      fontWeight: 'var(--typography-caption-font-weight, 300)',
    },
  },
  palette: {
    primary: {
      main: '#52ae30',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--base-border-radius)',
          textTransform: 'none',
          backgroundColor: 'var(--clr-primary)',
          color: 'var(--clr-button-text)',
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none',
          },
        },
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            color: 'var(--clr-primary)',
            backgroundColor: 'transparent',
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: 'var(--clr-primary)',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: 'transparent',
            color: 'var(--clr-primary)',
            border: '1px solid var(--clr-primary)',
          },
        },
      ],
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: createSvgIconFromString(SelectIconDown, 'Exapand down'),
        MenuProps: {
          disableScrollLock: true,
          PaperProps: {
            elevation: 0,
            sx: {
              mt: 1,
            },
          },
          slotProps: {
            backdrop: {
              sx: {
                backgroundColor: 'transparent',
              },
            },
          },
        },
      },
      styleOverrides: {
        root: {
          ...commonInputRootStyles,
          '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
          },
        },
        icon: {
          color: 'var(--clr-primary)',
          '.Mui-disabled &': {
            display: 'none',
          },
        },
        select: {
          ...commonInputRootStyles,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...commonInputRootStyles,
          '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-primary) !important',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-primary) !important',
          },
        },
        notchedOutline: {
          ...commonNotchedOutlineStyles,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
          borderRadius: '0.75rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          padding: '0.5rem 0',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          color: 'var(--clr-text-primary, hsl(219, 5%, 9%))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.2s',

          '&:hover': {
            backgroundColor: 'var(--clr-bg-2, hsl(150, 8%, 97%))',
          },

          "&.Mui-selected, &[aria-selected='true']": {
            backgroundColor: 'var(--clr-primary-light) !important',
            fontWeight: 'bold',

            '&:hover': {
              backgroundColor: 'var(--clr-bg-2, hsl(150, 8%, 97%))',
            },
          },

          '&.Mui-focusVisible': {
            backgroundColor: 'var(--clr-bg-2, hsl(150, 8%, 97%)) !important',
          },

          '&.Mui-disabled': {
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiModal: {
      defaultProps: {
        slotProps: {
          backdrop: {
            sx: {
              background: 'var(--clr-bg-overlay, rgba(25, 25, 25, 0.27))',
            },
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: 'var(--clr-border-primary)',
          '&.Mui-checked': {
            color: 'var(--clr-primary)',
          },
          '&.Mui-checked .MuiSvgIcon-root': {
            borderColor: 'var(--clr-border-primary)',
          },
          '&.Mui-disabled': {
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: 'var(--clr-primary)',
          },
          '&.Mui-checked .MuiSwitch-thumb': {
            color: 'var(--clr-primary)',
          },
        },
        track: {
          backgroundColor: 'var(--clr-border-primary)',
        },
        thumb: {
          color: '--clr-bg-4',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            ...commonInputRootStyles,
            ...commonFocusedStyles,
            ...commonErrorStyles,
            '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            ...commonNotchedOutlineStyles,
          },
          '& .MuiInputLabel-root.Mui-disabled': {
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: 'var(--typography-body1-font-size, 1rem)',
          borderRadius: 'var(--base-border-radius, 0.5rem)',
          padding: '1rem',
        },
        standardInfo: {
          backgroundColor: 'var(--clr-info-light)',
          color: 'var(--clr-info)',
          '&.snackbar-alert': {
            border: '1px solid var(--clr-info)',
          },
        },
        standardSuccess: {
          backgroundColor: 'var(--clr-primary-light)',
          color: 'var(--clr-primary)',
          '&.snackbar-alert': {
            border: '1px solid var(--clr-primary)',
          },
        },
        standardWarning: {
          backgroundColor: 'var(--clr-warning-light)',
          color: 'var(--clr-warning-dark)',
          '&.snackbar-alert': {
            border: '1px solid var(--clr-warning)',
          },
        },
        standardError: {
          backgroundColor: 'var(--clr-danger-light)',
          color: 'var(--clr-danger)',
          '&.snackbar-alert': {
            border: '1px solid var(--clr-danger)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--base-border-radius, 0.75rem)',
          padding: '1.25rem',
          backgroundColor: 'var(--clr-bg-1, #fff)',
          color: 'var(--clr-text-primary, #000)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--base-border-radius, 0.5rem)',
          backgroundColor: 'var(--clr-bg-1, #fff)',
          border: '1px solid var(--clr-border-primary, #ccc)',
          marginBottom: '1rem',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: '3rem',
          '&.Mui-expanded': {
            minHeight: '3rem',
          },
        },
        content: {
          margin: '0.5rem 0',
          '&.Mui-expanded': {
            margin: '0.5rem 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '1rem',
          fontSize: 'var(--typography-body1-font-size, 1rem)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--base-border-radius, 0.5rem)',
          backgroundColor: 'var(--clr-bg-1, #fff)',
          boxShadow: 'var(--base-box-shadow)',
          '&.no-shadow': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          overflow: 'auto',
          maxHeight: '100%',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--tabs-fo-clr-bg, #ffffff)',
          padding: '12px 12px 0',
          borderTopLeftRadius: 'var( --tabs-fo-border-radius)',
          borderTopRightRadius: 'var( --tabs-fo-border-radius)',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          color: 'var(--clr-text-primary, black)',
          borderRadius: 'var( --tabs-fo-border-radius)',
          '&.Mui-selected': {
            fontWeight: 700,
            backgroundColor: 'var(--tabs-fo-tab-hover, #eef7ea)',
            color: 'var(--clr-text-primary, black)',
          },
          '&.Mui-disabled': {
            color: 'hsl(0, 0%, 50%)',
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--base-border-radius, 0.75rem)',
          backgroundColor: 'var(--clr-bg-1, #fff)',
          color: 'var(--clr-text-primary, #000)',
          padding: '15px',
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        labelContainer: {
          fontWeight: 'bold',
          fontSize: '1.1rem',
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          fontWeight: 600,
          fontSize: '0.9rem',
          padding: '0.25rem 0',
        },
        header: {
          backgroundColor: 'hsl(0, 0%, 95%)',
          borderRadius: 'var(--base-border-radius, 0.5rem)',
        },
        weekContainer: {
          justifyContent: 'space-between',
        },
        day: {
          fontSize: '1.15rem',
          borderRadius: '999px',
          width: '36px',
          height: '36px',
          margin: '4px',
          '&.Mui-selected': {
            backgroundColor: 'var(--clr-primary)',
            color: '#fff',
            borderRadius: '999px',
            border: '2px solid var(--clr-primary)',
          },
          '&.MuiPickersDay-dayWithMargin': {
            margin: '4px',
          },
          '&.MuiPickersDay-today': {
            border: '1px solid var(--clr-primary)',
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
          borderRadius: '999px',
          width: '36px',
          height: '36px',
          margin: '4px',
          '&.Mui-selected': {
            backgroundColor: 'var(--clr-primary)',
            color: '#fff',
            border: '2px solid var(--clr-primary)',
          },
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--base-border-radius, 0.75rem)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          backgroundColor: 'var(--clr-bg-1, #fff)',
        },
      },
    },
    MuiPickersOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--field-border-radius, 0.75rem)',
          backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
          fontSize: '1rem',
          boxShadow: 'none',

          '&.Mui-disabled': {
            backgroundColor: 'var(--clr-bg-disabled, hsl(0, 0%, 95%))',
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
            pointerEvents: 'none',
          },

          '&:hover:not(.Mui-disabled) .MuiPickersOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-primary)',
          },

          '&.Mui-focused .MuiPickersOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-primary)',
          },
        },

        notchedOutline: {
          border: '1px solid var(--clr-border-primary, hsl(219, 13%, 70%))',
        },
      },
    },
  },
};
