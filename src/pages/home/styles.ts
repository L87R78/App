const classes = {
  layout: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  containerWelcome: {
    width: '58%',
    paddingTop: '10%',
    background: 'var(--clr-bg-1)',
    borderRadius: '24px',
  },
  title: {
    textAlign: 'center',
    fontSize: '40px',
    color: 'var(--clr-text-label)',
  },
  description: {
    textAlign: 'center',
    fontSize: '24px',
    color: 'var(--clr-text-label)',
  },
  wrapperWaitingBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    width: '400px',
    height: '60px',
    margin: '24px auto',
    background: '#F4F4F6',
    borderRadius: '16px',
  },
  textWaitingPeople: {
    fontSize: '18px',
  },
  wrapperActions: {
    display: 'flex',
    flexDirection: 'column',
    margin: '24px auto',
    width: '296px',
    gap: '16px',
  },
  // Chart
  containerChart: {
    width: '40%',
    background: 'var(--clr-bg-1)',
    borderRadius: '24px',
  },
};

export default classes;
