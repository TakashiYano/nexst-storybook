import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post: React.FC = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <UserByUserId id={data?.userId} />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl text-gray-900 mt-2">{data?.body}</p>

      <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      <div className="mt-2">
        <CommentsByPostId id={data?.id} />
      </div>
    </div>
  );
};
