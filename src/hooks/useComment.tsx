import { useRouter } from "next/dist/client/router";
import { CommentType } from "src/types/types";
import { CommentsType } from "src/types/types";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR<CommentType, Error>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
