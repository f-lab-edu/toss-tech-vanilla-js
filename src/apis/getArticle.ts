import { BASE_URL } from ".";
import { ArticleDetail } from "../types";

export const getArticleById = async (
  articleId: string
): Promise<ArticleDetail | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/data/article.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data[articleId];
  } catch (error) {
    console.error(error);
  }
};
