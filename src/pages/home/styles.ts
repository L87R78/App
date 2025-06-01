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
  },
  containerFirstSectionChart: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '24px',
    padding: '24px',
    marginBottom: '48px',
    background: 'var(--clr-bg-1)',
  },
  containerSecondSectionChart: {
    height: '150px',
    background: 'var(--clr-bg-1)',
    borderRadius: '24px',
    padding: '24px',
  },
  firstSectionChart: {
    paddingBottom: '24px',
  },
  secondSectionChart: {},
  wrapperBoxInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  wrapperTotalCustomersInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  titleChart: {
    fontSize: '24px',
  },
  descriptionChart: {
    fontSize: '14px',
    color: 'var(--clr-text-label)',
  },
  descriptionPercentageChart: {
    fontSize: '14px',
    color: 'var(--clr-danger)',
    marginLeft: '8px',
  },
  wrapperLastClientInfo: {
    display: 'flex',
    gap: '16px',
  },
  wrapperAllClientInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '32px',
  },
  titleAllClients: {
    fontSize: '18px',
  },
};

export default classes;
