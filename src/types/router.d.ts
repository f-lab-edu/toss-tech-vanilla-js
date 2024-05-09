export type Params = Record<string, string>;

export type Route = {
  testRegExp: RegExp;
  params: string[];
  callback: (params: Params) => void;
};

export type Router = {
  addRoute: (path: string, callback: (params: Params) => void) => typeof router;
  setNotFound: (callback: () => void) => typeof router;
  navigate: (path: string) => void;
  start: () => void;
};
