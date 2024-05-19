import articles from "../data/article.json";

export const getArticleById = async (articleId: string) => {
  try {
    return articles[articleId];
  } catch (error) {
    console.error(error);
  }
};
