import { BASE_URL } from ".";
import { Category } from "../types";

export const getArticleListByCategory = async (category: Category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/data/${category}ArticleList.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(error);
  }
};
