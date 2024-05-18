type Post = {
  id?: number;
  title: string;
  content: string;
  image?: string;
  userFirstName?: string;
  createdAt?: string;
  imageUrl: string;
  userId: number;
  isLiked?: boolean;
  likes?: number;
};

type FormState = {
  errors: string[] | null;
};
