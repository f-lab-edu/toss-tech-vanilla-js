import techJson from "../data/techArticleList.json";
import designJson from "../data/designArticleList.json";
import { Category } from "../types";

export const getArticleListByCategory = async (category: Category) => {
  try {
    if (category === "tech") {
      return techJson.articles;
    } else if (category === "design") {
      return designJson.articles;
    }
  } catch (error) {
    console.error(error);
  }
};
