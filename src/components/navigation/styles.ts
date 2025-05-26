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
    width: isOpen ? '322px' : '122px',
    background: '#CACED5',
    transition: 'all 0.5s ease',
  }),
  iconButton: (isOpen: boolean) => ({
    position: 'fixed',
    top: '85px',
    left: isOpen ? '322px' : '112px',
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
  wrapperShortNavigation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '64px',
  },
  buttonShortNavigation: {
    marginTop: '24px',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #CACED5',
    cursor: 'pointer',
  },
  menuShortTitle: {
    marginTop: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapperButtons: {
    marginTop: '64px',
    padding: '16px',
  },
  wrapperButtonMenu: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
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
  menuItem: (isActive: boolean, isSelectedItem: boolean) => ({
    margin: '16px 0px 16px 32px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    pointerEvents: isActive ? 'auto' : 'none',
    padding: '8px',
    borderRadius: '8px',
    color: isActive ? '#151617' : '#7D828B',
    background: isSelectedItem ? '#eef7ea' : 'none',
    '&:hover': {
      background: isSelectedItem ? '#eef7ea' : '#F1F1F3',
    },
  }),
  wrapperSecondMenu: {
    margin: '16px 0px 0px 32px',
  },
};

export default classes;
