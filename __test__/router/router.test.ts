import createRouter, { extractUrlParams } from "../../src/router";

describe("extractUrlParams function test", () => {
  test("returns an empty object if no params are specified", () => {
    const route = {
      params: [],
      testRegExp: /tech/,
    };
    const pathname = "/tech";
    expect(extractUrlParams(route, pathname)).toEqual({});
  });

  test("extracts single parameter from the URL", () => {
    const route = {
      params: ["articleId"],
      testRegExp: /article\/(.+)/,
    };
    const pathname = "/article/react-native-2024";
    expect(extractUrlParams(route, pathname)).toEqual({
      articleId: "react-native-2024",
    });
  });
});

describe("createRouter", () => {
  let router;
  let mockCallback;
  let mockNotFoundCallback;

  beforeEach(() => {
    router = createRouter();
    mockCallback = jest.fn();
    mockNotFoundCallback = jest.fn();
    router.addRoute("/article/:id", mockCallback);
    router.setNotFound(mockNotFoundCallback);

    global.window = Object.create(window);
    const url = "http://toss.tech";
    Object.defineProperty(window, "location", {
      value: {
        href: url,
        pathname: url,
      },
      writable: true,
    });
  });

  test("calls the callback when the route matches", () => {
    window.location.pathname = "/article/react-native-2024";
    router.start();

    expect(mockCallback).toHaveBeenCalled();
  });

  test("calls notFound when no route matches", () => {
    window.location.pathname = "/not-added-page";
    router.start();

    expect(mockNotFoundCallback).toHaveBeenCalled();
  });
});
