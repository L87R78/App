import { IconButton } from '@mui/material';
import { Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import IconArrowLeft from '@/assets/icons/iconArrowLeft.svg';
import iconClient from '@/assets/icons/iconClient.svg';
import iconCoinsHand from '@/assets/icons/iconCoinsHand.svg';
import iconCreditCard from '@/assets/icons/iconCreditCard.svg';
import iconPiggyBank from '@/assets/icons/iconPiggyBank.svg';
import iconSwitchHorizontal from '@/assets/icons/iconSwitchHorizontal.svg';

import iconDsk from '@/assets/icons/iconDSK.svg';
import imageDskLogo from '@/assets/images/imageDskLogo.svg';
import { route } from '../../router/pagesData';
import { Box, Drawer, Typography } from '../shared';
import {
  accounts,
  client,
  clientData,
  creditProducts,
  creditProductsData,
  dailyBanking,
  dailyBankingAccountsData,
  dailyBankingData,
  dailyBankingPlansData,
  paymentOperations,
  paymentOperationsData,
  plans,
  reports,
  reportsData,
  savingInvestments,
  savingInvestmentsData,
  savingInvestmentsUserData,
  user,
} from './constants';
import classes from './styles';

interface NavigationProps {
  handleNavigation: (value: boolean) => void;
}

// TODO: Improve the code below
const Navigation = (props: NavigationProps) => {
  const { handleNavigation } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(true);
  const [clientButtons, setClientButtons] = useState({
    isClientItems: false,
    isReportItems: false,
  });
  const [dailyBankingButtons, setDailyBankingButtons] = useState({
    isDailyBankingItems: false,
    isPlanItems: false,
    isAccountItems: false,
  });
  const [paymentOperationsButtons, setPaymentOperationsButtons] = useState({
    isPaymentOperations: false,
  });
  const [creditProductsButtons, setCreditProductsButtons] = useState({
    isCreditProductsButtons: false,
  });
  const [savingInvestmentsButtons, setSavingInvestmentsButtons] = useState({
    isSavingInvestments: false,
    isSavingInvestmentsUser: false,
  });

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    handleNavigation(isOpen);
  };

  const handleNavigate = (route?: string) => {
    route && navigate(route);
  };

  const handleRenderFirstButton = (title: string, isOpen: boolean, icon: string) => {
    return (
      <>
        <IconButton sx={classes.iconArrowMenu(isOpen)}>
          <img src={IconArrowLeft} alt="" />
        </IconButton>
        <Box sx={classes.menuIcon} component="img" src={icon} />
        <Typography sx={classes.menuFirstTitle} variant="h5">
          {title}
        </Typography>
      </>
    );
  };

  const handleRendeSecondButton = (title: string, isOpen: boolean) => {
    return (
      <Box sx={classes.secondButton}>
        <IconButton sx={classes.iconArrowMenu(isOpen)}>
          <img src={IconArrowLeft} alt="" />
        </IconButton>

        <Typography sx={classes.menuSecondTitle} variant="h5">
          {title}
        </Typography>
      </Box>
    );
  };

  const navigation = (
    <Box sx={classes.root}>
      <Box sx={classes.wrapperDskImage}>
        <Box
          component="img"
          src={isOpen ? imageDskLogo : iconDsk}
          sx={isOpen ? classes.imageDsk : classes.iconDsk}
          onClick={() => handleNavigate(route.home)}
        />
      </Box>
      <Box sx={classes.horizontalLine(isOpen)} />
      <IconButton sx={classes.iconButton(isOpen)} onClick={() => handleIsOpen()}>
        <img src={IconArrowLeft} alt="" />
      </IconButton>

      {isOpen ? (
        <>
          {/* Client */}
          <Box sx={classes.wrapperButtons}>
            <Box sx={classes.wrapperButtonMenu}>
              <Box
                sx={classes.parentButton}
                onClick={() => {
                  setClientButtons(prev => ({
                    ...prev,
                    isClientItems: !clientButtons.isClientItems,
                    isReportItems: false,
                  }));
                }}
              >
                {handleRenderFirstButton(client, clientButtons.isClientItems, iconClient)}
              </Box>
            </Box>

            {clientButtons.isClientItems && (
              <Box sx={classes.wrapperItems}>
                <>
                  {clientData.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <Typography
                          onClick={() => handleNavigate(item.path)}
                          sx={classes.menuItem(Boolean(item.path.length), pathname === item.path)}
                          variant="h5"
                        >
                          {item.title}
                        </Typography>
                      </Fragment>
                    );
                  })}

                  <Box sx={classes.wrapperSecondMenu}>
                    <Box sx={classes.wrapperButtonMenu}>
                      <Box
                        sx={classes.parentButton}
                        onClick={() => {
                          setClientButtons(prev => ({
                            ...prev,
                            isReportItems: !clientButtons.isReportItems,
                          }));
                        }}
                      >
                        {handleRendeSecondButton(reports, clientButtons.isReportItems)}
                      </Box>
                    </Box>
                    {clientButtons.isReportItems && (
                      <Box sx={classes.wrapperItems}>
                        {reportsData.map((item, index) => {
                          return (
                            <Fragment key={index}>
                              <Typography
                                sx={classes.menuItem(
                                  Boolean(item.path.length),
                                  pathname === item.path
                                )}
                                variant="h5"
                              >
                                {item.title}
                              </Typography>
                            </Fragment>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                </>
              </Box>
            )}

            {/* Daily Banking */}
            <Box sx={classes.wrapperButtonMenu}>
              <Box
                sx={classes.parentButton}
                onClick={() => {
                  setDailyBankingButtons(prev => ({
                    ...prev,
                    isDailyBankingItems: !dailyBankingButtons.isDailyBankingItems,
                    isPlanItems: false,
                    isAccountItems: false,
                  }));
                }}
              >
                {handleRenderFirstButton(
                  dailyBanking,
                  dailyBankingButtons.isDailyBankingItems,
                  iconCoinsHand
                )}
              </Box>
            </Box>
            {dailyBankingButtons.isDailyBankingItems && (
              <Box sx={classes.wrapperItems}>
                <Box sx={classes.wrapperSecondMenu}>
                  <Box sx={classes.wrapperButtonMenu}>
                    <Box
                      sx={classes.parentButton}
                      onClick={() => {
                        setDailyBankingButtons(prev => ({
                          ...prev,
                          isPlanItems: !dailyBankingButtons.isPlanItems,
                        }));
                      }}
                    >
                      {handleRendeSecondButton(plans, dailyBankingButtons.isPlanItems)}
                    </Box>
                  </Box>
                  {dailyBankingButtons.isPlanItems && (
                    <Box sx={classes.wrapperItems}>
                      {dailyBankingPlansData.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <Typography
                              sx={classes.menuItem(
                                Boolean(item.path.length),
                                pathname === item.path
                              )}
                              variant="h5"
                            >
                              {item.title}
                            </Typography>
                          </Fragment>
                        );
                      })}
                    </Box>
                  )}
                </Box>
                <Box sx={classes.wrapperSecondMenu}>
                  <Box sx={classes.wrapperButtonMenu}>
                    <Box
                      sx={classes.parentButton}
                      onClick={() => {
                        setDailyBankingButtons(prev => ({
                          ...prev,
                          isAccountItems: !dailyBankingButtons.isAccountItems,
                        }));
                      }}
                    >
                      {handleRendeSecondButton(accounts, dailyBankingButtons.isAccountItems)}
                    </Box>
                  </Box>
                  {dailyBankingButtons.isAccountItems && (
                    <Box sx={classes.wrapperItems}>
                      {dailyBankingAccountsData.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <Typography
                              sx={classes.menuItem(
                                Boolean(item.path.length),
                                pathname === item.path
                              )}
                              variant="h5"
                            >
                              {item.title}
                            </Typography>
                          </Fragment>
                        );
                      })}
                    </Box>
                  )}
                </Box>
                {dailyBankingData.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Typography
                        sx={classes.menuItem(Boolean(item.path.length), pathname === item.path)}
                        variant="h5"
                      >
                        {item.title}
                      </Typography>
                    </Fragment>
                  );
                })}
              </Box>
            )}
            {/* Payment Operations */}
            <Box sx={classes.wrapperButtonMenu}>
              <Box
                sx={classes.parentButton}
                onClick={() => {
                  setPaymentOperationsButtons(prev => ({
                    ...prev,
                    isPaymentOperations: !paymentOperationsButtons.isPaymentOperations,
                  }));
                }}
              >
                {handleRenderFirstButton(
                  paymentOperations,
                  paymentOperationsButtons.isPaymentOperations,
                  iconSwitchHorizontal
                )}
              </Box>
            </Box>
            {paymentOperationsButtons.isPaymentOperations && (
              <Box sx={classes.wrapperItems}>
                {paymentOperationsData.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Typography
                        onClick={() => handleNavigate(item.path)}
                        sx={classes.menuItem(Boolean(item.path.length), pathname === item.path)}
                        variant="h5"
                      >
                        {item.title}
                      </Typography>
                    </Fragment>
                  );
                })}
              </Box>
            )}
            {/* Credit Products */}
            <Box sx={classes.wrapperButtonMenu}>
              <Box
                sx={classes.parentButton}
                onClick={() => {
                  setCreditProductsButtons(prev => ({
                    ...prev,
                    isCreditProductsButtons: !creditProductsButtons.isCreditProductsButtons,
                  }));
                }}
              >
                {handleRenderFirstButton(
                  creditProducts,
                  creditProductsButtons.isCreditProductsButtons,
                  iconCreditCard
                )}
              </Box>
            </Box>
            {creditProductsButtons.isCreditProductsButtons && (
              <Box sx={classes.wrapperItems}>
                {creditProductsData.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Typography
                        sx={classes.menuItem(Boolean(item.path.length), pathname === item.path)}
                        variant="h5"
                      >
                        {item.title}
                      </Typography>
                    </Fragment>
                  );
                })}
              </Box>
            )}
            {/* Savings and Investments */}
            <Box sx={classes.wrapperButtonMenu}>
              <Box
                sx={classes.parentButton}
                onClick={() => {
                  setSavingInvestmentsButtons(prev => ({
                    ...prev,
                    isSavingInvestments: !savingInvestmentsButtons.isSavingInvestments,
                    isSavingInvestmentsUser: false,
                  }));
                }}
              >
                {handleRenderFirstButton(
                  savingInvestments,
                  savingInvestmentsButtons.isSavingInvestments,
                  iconPiggyBank
                )}
              </Box>
            </Box>
            {savingInvestmentsButtons.isSavingInvestments && (
              <Box sx={classes.wrapperItems}>
                <Box sx={classes.wrapperSecondMenu}>
                  <Box sx={classes.wrapperButtonMenu}>
                    <Box
                      sx={classes.parentButton}
                      onClick={() => {
                        setSavingInvestmentsButtons(prev => ({
                          ...prev,
                          isSavingInvestmentsUser:
                            !savingInvestmentsButtons.isSavingInvestmentsUser,
                        }));
                      }}
                    >
                      {handleRendeSecondButton(
                        user,
                        savingInvestmentsButtons.isSavingInvestmentsUser
                      )}
                    </Box>
                  </Box>
                  {savingInvestmentsButtons.isSavingInvestmentsUser && (
                    <Box sx={classes.wrapperItems}>
                      {savingInvestmentsUserData.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <Typography
                              sx={classes.menuItem(
                                Boolean(item.path.length),
                                pathname === item.path
                              )}
                              variant="h5"
                            >
                              {item.title}
                            </Typography>
                          </Fragment>
                        );
                      })}
                    </Box>
                  )}
                </Box>

                {savingInvestmentsData.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Typography
                        sx={classes.menuItem(Boolean(item.path.length), pathname === item.path)}
                        variant="h5"
                      >
                        {item.title}
                      </Typography>
                    </Fragment>
                  );
                })}
              </Box>
            )}
          </Box>
        </>
      ) : (
        <Box sx={classes.wrapperShortNavigation}>
          <Box sx={classes.buttonShortNavigation(clientButtons.isClientItems)}>
            <Box component="img" src={iconClient} onClick={() => handleNavigate(route.home)} />
            <Typography sx={classes.menuShortTitle} variant="h5">
              {client}
            </Typography>
          </Box>
          <Box sx={classes.buttonShortNavigation(false)}>
            <Box
              component="img"
              src={iconCoinsHand}
              onClick={() => handleNavigate(route.dailyBanking)}
            />
            <Typography sx={classes.menuShortTitle} variant="h5">
              {dailyBanking}
            </Typography>
          </Box>
          <Box sx={classes.buttonShortNavigation(paymentOperationsButtons.isPaymentOperations)}>
            <Box
              component="img"
              src={iconSwitchHorizontal}
              onClick={() => handleNavigate(route.paymentOperations)}
            />
            <Typography sx={classes.menuShortTitle} variant="h5">
              {paymentOperations}
            </Typography>
          </Box>
          <Box sx={classes.buttonShortNavigation(false)}>
            <Box
              component="img"
              src={iconCreditCard}
              onClick={() => handleNavigate(route.creditProducts)}
            />
            <Typography sx={classes.menuShortTitle} variant="h5">
              {creditProducts}
            </Typography>
          </Box>
          <Box sx={classes.buttonShortNavigation(false)}>
            <Box
              component="img"
              src={iconPiggyBank}
              onClick={() => handleNavigate(route.savingInvestments)}
            />
            <Typography sx={classes.menuShortTitle} variant="h5">
              {savingInvestments}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <Drawer
        open={true}
        onClose={() => {}}
        variant="permanent"
        anchor="left"
        ModalProps={{
          BackdropProps: {
            sx: {
              background: 'none',
              borderLeft: '4px dashed red',
              borderRadius: '110px 110px 110px 0',
              boxShadow: 'none',
            },
          },
        }}
        slotProps={{
          paper: {
            sx: {
              width: isOpen ? '315px' : '130px',
              transition: 'all 0.5s ease',
              borderRadius: '0px 24px 24px 0',
              boxShadow: '0px 8.834px 26.503px 0px rgba(73, 92, 136, 0.15)',
            },
          },
        }}
      >
        {navigation}
      </Drawer>
    </>
  );
};
export default Navigation;
