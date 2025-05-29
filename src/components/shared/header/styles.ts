const classes = {
  containerHeader: (isOpenNavigation: boolean) => ({
    position: 'fixed',
    right: '24px',
    top: '24px',
    left: !isOpenNavigation ? '380px' : '170px',
    height: '50px',
    padding: '16px 24px',
    borderRadius: '24px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.5s ease',
  }),
};

export default classes;
