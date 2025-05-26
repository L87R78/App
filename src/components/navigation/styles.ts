const classes = {
  root: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  wrapperDskImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageDsk: {
    width: '256px',
    height: '56px',
    cursor: 'pointer',
    marginTop: '22px',
    transition: 'all 0.5s ease',
  },
  iconDsk: {
    marginTop: '22px',
    width: '46px',
    height: '56px',
    cursor: 'pointer',
  },
  horizontalLine: (isOpen: boolean) => ({
    position: 'fixed',
    top: '102px',
    height: '1px',
    width: isOpen ? '322px' : '82px',
    background: '#CACED5',
    transition: 'all 0.5s ease',
  }),
  iconButton: (isOpen: boolean) => ({
    position: 'fixed',
    top: '85px',
    left: isOpen ? '322px' : '82px',
    borderRadius: '8px',
    border: '1px solid #CACED5',
    background: '#fff',
    zIndex: 966,
    transition: 'all 0.5s ease',
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',

    '&:hover': {
      background: '#fff',
    },
  }),
  wrapperButtons: {
    marginTop: '64px',
    padding: '16px',
  },
  wrapperClient: (isOpen: boolean) => ({
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  }),
  parentButton: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '16px',
    cursor: 'pointer',
  },
  secondButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '-2px',
  },
  menuIcon: {
    margin: '0px 16px 0px 8px',
  },
  iconArrowMenu: (isOpen: boolean) => ({
    transform: isOpen ? 'rotate(270deg)' : 'rotate(180deg)',
    transition: 'all 0.3s ease',
  }),
  wrapperMenuItems: {
    margin: '16px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  wrapperItems: {
    borderLeft: '1px solid #CACED5',
    marginLeft: '14px',
  },
  menuFirstTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  menuSecondTitle: {
    fontWeight: 'bold',
    marginLeft: '16px',
    fontSize: '16px',
  },
  menuItem: {
    margin: '16px 0px 16px 32px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    '&:hover': {
      background: '#F1F1F3',
    },
  },
  wrapperSecondMenu: {
    margin: '16px 0px 0px 32px',
  },
};

export default classes;
