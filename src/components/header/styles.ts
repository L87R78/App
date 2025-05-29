const classes = {
  containerHeader: (isOpenNavigation: boolean) => ({
    position: 'fixed',
    right: '24px',
    top: '24px',
    left: !isOpenNavigation ? '380px' : '170px',
    padding: '12px 24px',
    borderRadius: '24px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transition: 'all 0.5s ease',
  }),
  wrapperContent: {
    display: 'flex',
  },
  iconAvatar: {
    marginRight: '8px',
  },
  iconNotifications: {
    margin: '0px 24px',
  },
  wrapperAvatar: {
    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
  },
  name: {
    fontSize: '16px',
  },
  jobTitle: {
    color: 'var(--clr-text-secondary, #828282)',
    fontSize: '14px',
  },
  // userSettings menu
  wrapperUserSettings: {
    position: 'absolute',
    top: '60px',
    left: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: 'var(--popover-box-shadow)',
    background: 'white',
    borderRadius: '16px',
    padding: '8px',
    width: '100%',
  },
  wrapperRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '12px 0px 12px 16px',
  },
  settingsText: {
    fontSize: '16px',
    marginLeft: '8px',
    color: 'var(--clr-text)',
  },
};

export default classes;
