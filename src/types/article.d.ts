export type Category = "tech" | "design";

export type Article = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
};

export type ArticleDetail = Omit<Article, "description"> & {
  profile_image: string;
  position: string;
  content: string;
};
