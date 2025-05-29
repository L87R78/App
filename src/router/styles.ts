const HEADER_HEIGHT = 100;
const FOOTER_HEIGHT = 60;

const classes = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#F1F1F3',
  },
  main: (isCollapseNavigation: boolean) => ({
    height: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
    marginTop: `${HEADER_HEIGHT}px`,
    marginLeft: !isCollapseNavigation ? '380px' : '170px',
    borderRadius: '24px',
    padding: '24px',
    paddingLeft: '0px',
    background: 'transparent',
    transition: 'all 0.5s ease',
    overflow: 'hidden',
  }),
};

export default classes;
