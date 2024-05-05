const BASE_URL = window.location.origin;

export const getArticleListByCategory = async (category) => {
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
