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
      fontSize: 'var(--typography-p-font-size, 1.25rem)',
      fontWeight: 'var(--typography-p-font-weight, 400)',
      lineHeight: 'var(--typography-p-line-height, 1.5rem)',
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
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
          },
        },
        icon: {
          color: 'var(--clr-primary)',
        },
        select: {
          backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
          borderRadius: 'var(--field-border-radius, 0.75rem)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--field-border-radius, 0.75rem)',
          backgroundColor: 'var(--clr-bg-1, hsl(0, 0%, 100%))',
          '&.Mui-disabled': {
            backgroundColor: 'var(--clr-bg-disabled, hsl(0, 0%, 95%))',
            color: 'var(--clr-text-disabled, hsl(0, 0%, 75%))',
            border: '1px solid var(--clr-border-disabled)',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-danger, #ff435a)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--clr-border-primary, hsl(219, 13%, 70%))',
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
          '&.Mui-selected': {
            backgroundColor: 'var(--clr-primary-light)',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'var(--clr-bg-2, hsl(150, 8%, 97%))',
            },
          },
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--clr-bg-2, hsl(150, 8%, 97%))',
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
  },
};
