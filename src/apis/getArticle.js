// const BASE_URL = window.location.origin;

// export const getArticleById = async (articleId) => {
//   try {
//     const response = await fetch(`${BASE_URL}/data/article.json`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();
//     return data[articleId];
//   } catch (error) {
//     console.error(error);
//   }
// };

import articles from "../data/article.json";

export const getArticleById = async (articleId) => {
  try {
    return articles[articleId];
  } catch (error) {
    console.error(error);
  }
};
