const classes = {
  container: (isFocused: boolean) => ({
    display: 'flex',
    padding: '8px 24px',
    height: '48px',
    border: `1px solid ${isFocused ? 'green' : '#DDE0E3'}`,
    borderRadius: '12px',
  }),

  wrapperSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  phonePrefix: {
    margin: '0px 12px',
  },
  iconArrow: {
    transform: 'rotate(270deg)',
  },
  input: {
    border: '1px solid red',
  },
  wrapperInput: {
    marginLeft: '16px',
    borderLeft: '1px solid #F1F1F3',
  },
};

export default classes;
