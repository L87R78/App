const classes = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#F1F1F3',
  },
  main: (isCollapseNavigation: boolean) => ({
    height: '60vh',
    marginTop: '120px',
    marginRight: '24px',
    marginLeft: !isCollapseNavigation ? '380px' : '170px',
    borderRadius: '24px',
    padding: '24px',
    background: '#fff',
    transition: 'all 0.5s ease',
  }),
};

export default classes;
