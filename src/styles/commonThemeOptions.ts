import ExpandMoreOutlinedIcon from '../assets/icons/iconDown.svg';

export const commonThemeOptions = {
  typography: {
    h1: {
      fontSize: 'var(--typography-h1-font-size, 3.25rem)',
      fontWeight: 'var(--typography-h1-font-weight, 900)',
      lineHeight: 'var(--typography-h1-line-height, 3rem)',
    },
    h2: {
      fontSize: 'var(--typography-h2-font-size, 3rem)',
      fontWeight: 'var(--typography-h2-font-weight, 700)',
      lineHeight: 'var(--typography-h2-line-height, 2rem)',
    },
    h3: {
      fontSize: 'var(--typography-h3-font-size, 2.5rem)',
      fontWeight: 'var(--typography-h3-font-weight, 600)',
      lineHeight: 'var(--typography-h3-line-height, 1.75rem)',
    },
    h4: {
      fontSize: 'var(--typography-h4-font-size, 2rem)',
      fontWeight: 'var(--typography-h4-font-weight, 400)',
      lineHeight: 'var(--typography-h4-line-height, 2rem)',
    },
    h5: {
      fontSize: 'var(--typography-h5-font-size, 1.75rem)',
      fontWeight: 'var(--typography-h5-font-weight, 400)',
      lineHeight: 'var(--typography-h5-line-height, 1.75rem)',
    },
    body1: {
      fontSize: 'var(--typography-body1-font-size, 1rem)',
      fontWeight: 'var(--typography-body1-font-weight, 400)',
      lineHeight: 'var(--typography-body1-line-height, 1.5rem)',
    },
    body2: {
      fontSize: 'var(--typography-body2-font-size, 0.85rem)',
      fontWeight: 'var(--typography-body2-font-weight, 500)',
      lineHeight: 'var(--typography-body2-line-height, 1.25rem)',
    },
    caption: {
      fontSize: 'var(--typography-caption-font-size, 0.5rem)',
      fontWeight: 'var(--typography-caption-font-weight, 300)',
      lineHeight: 'var(--typography-caption-line-height, 1rem)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--base-border-radius)',
          textTransform: 'none',
          backgroundColor: 'var(--clr-primary)',
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
        IconComponent: ExpandMoreOutlinedIcon,
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: 'var(--clr-bg-disabled, hsl(0, 0%, 95%))',
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
            border: '1px solid var(--clr-border-disabled)',
          },
        },
        icon: {
          color: 'var(--clr-primary)',
        },
        select: {
          backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
          borderRadius: 'var(--field-border-radius, 0.75rem)',
          fontSize: 'var(--typography-body1-font-size,1rem)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--field-border-radius, 0.75rem)',
          backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
          fontSize: 'var(--typography-body1-font-size,1rem)',

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-danger, #ff435a)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'var(--clr-bg-disabled, hsl(0, 0%, 95%))',
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
          },
        },
        notchedOutline: {
          borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
          borderRadius: 'var(--field-border-radius, 0.75rem)',
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
            borderRadius: 'var(--field-border-radius, 0.75rem)',
            backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
            fontSize: 'var(--typography-body1-font-size,1rem)',

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--clr-danger, #ff435a)',
            },
            '&.Mui-disabled': {
              backgroundColor: 'var(--clr-bg-disabled, hsl(0, 0%, 95%))',
              color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
            borderRadius: 'var(--field-border-radius, 0.75rem)',
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
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--tabs-fo-clr-bg, #ffffff)',
          padding: '12px 12px 0',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          color: 'var(--clr-text-primary, black)',
          padding: '0.75rem',
          border: '1px solid transparent',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          '&.Mui-selected': {
            fontWeight: 700,
            backgroundColor: 'var(--tabs-fo-tab-hover, #eef7ea)',
            color: 'var(--clr-text-primary, black)',

            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          },
          '&.Mui-disabled': {
            color: 'hsl(0, 0%, 50%)',
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
};
