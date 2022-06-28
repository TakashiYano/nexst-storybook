import type { NextPage } from "next";
import { CommentComponent } from "src/components/Comment";
import { Header } from "src/components/Header";

const CommentsId: NextPage = () => {
  return (
    <div>
      <Header />
      <CommentComponent />
    </div>
  );
};

export default CommentsId;
