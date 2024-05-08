import { Params, Route, Router } from "./types";

const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";
const TICKTIME = 250;

const routes: Route[] = [];
let notFound = () => {};
let lastPathname: string;

const router: Router = {
  addRoute: () => router,
  setNotFound: () => router,
  navigate: () => {},
  start: () => {},
};

const extractUrlParams = (route: Route, pathname: string) => {
  const params: Params = {};

  if (route.params.length === 0) {
    return params;
  }

  const matches = pathname.match(route.testRegExp);

  matches?.shift();

  matches?.forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });

  return params;
};

const checkRoutes = () => {
  const { pathname } = window.location;
  if (lastPathname === pathname) {
    return;
  }

  lastPathname = pathname;

  const currentRoute = routes.find((route) => {
    const { testRegExp } = route;
    return testRegExp.test(pathname);
  });

  if (!currentRoute) {
    notFound();
    return;
  }

  const urlParams = extractUrlParams(currentRoute, pathname);

  currentRoute.callback(urlParams);
};

router.addRoute = (path, callback) => {
  const params: string[] = [];

  const parsedPath = path
    .replace(ROUTE_PARAMETER_REGEXP, (_, paramName) => {
      params.push(paramName);
      return URL_FRAGMENT_REGEXP;
    })
    .replace(/\//g, "\\/");

  routes.push({
    testRegExp: new RegExp(`^${parsedPath}$`),
    callback,
    params,
  });

  return router;
};

router.setNotFound = (cb: () => void) => {
  notFound = cb;
  return router;
};

router.navigate = (path: string) => {
  window.history.pushState(null, "", path);
};

router.start = () => {
  window.addEventListener("popstate", checkRoutes);
  checkRoutes();
  window.setInterval(checkRoutes, TICKTIME);
};

const createRouter = () => router;

export default createRouter;
