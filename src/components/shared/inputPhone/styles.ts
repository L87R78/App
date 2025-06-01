const classes = {
  container: (isFocused: boolean) => ({
    display: 'flex',
    padding: '8px 24px',
    height: '42px',
    border: `1px solid ${isFocused ? 'green' : '#DDE0E3'}`,
    borderRadius: '12px',
  }),

  wrapperSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  phonePrefix: {
    margin: '4px 12px 0px 12px',
  },
  iconArrow: {
    transform: 'rotate(270deg)',
  },
  wrapperInput: {
    marginLeft: '54px',
    borderLeft: '1px solid #F1F1F3',
  },
};

export default classes;
