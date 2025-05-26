// import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useMsal } from "@azure/msal-react";

// import { ResponseStatus, ROLES } from "@/common/constants";
// import Loader from "@/components/loader/Loader";
// import { ValueOf } from "@/helpers";
// import { RootState } from "@/store";

import { pagesData, route } from './pagesData';

type RouteType = Extract<(typeof pagesData)[number], { path: string }>['path'];

// const isPageAccessibleByRole = (route: RouteType, role: ValueOf<ROLES>) => {
//   const routeEntry = pagesData.find((page) => page.path === route);

//   if (!routeEntry || !routeEntry.scopes) {
//     return false;
//   }

//   return routeEntry.scopes.includes(role);
// };

const PrivateRoute = () => {
  //   const { accounts } = useMsal();
  //   const { user, status } = useSelector((state: RootState) => state.system);
  //   const { pathname } = useLocation();

  //   if (!user || !accounts[0]) {
  //     return <Navigate to={route.login} />;
  //   }

  //   if (!user || !user.role || status === ResponseStatus.PENDING) {
  //     return <Loader />;
  //   }

  //   if (isPageAccessibleByRole(pathname as ValueOf<typeof route>, user.role)) {
  //     return <Outlet />;
  //   }

  return <Navigate to={route.home} />;
};

export default PrivateRoute;
