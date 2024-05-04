import { extractUrlParams } from "../../src/router";

describe("extractUrlParams", () => {
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
