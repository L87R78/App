const classes = {
  wrapperInputs: {
    display: 'flex',
    gap: '8px',
  },
  input: {
    width: '48px',
    height: '48px',
    textAlign: 'center',
    fontSize: '16px',
    border: '1px solid var(--clr-border-primary, hsl(219, 13%, 70%))',
    borderRadius: '8px',
    transition: 'border 0.2s ease, box-shadow 0.2s ease',
    '&:focus': {
      border: '1px solid var(--clr-primary)',
      outline: 'none',
    },
  },
  wrapperActions: {
    border: '1px solid red',
  },
};

export default classes;
