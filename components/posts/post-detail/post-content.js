/** @format */

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "welcome the choice is either to repel the provision blind fault",
  image: "bg1.jpg",
  content: "# frist post",
  date: "2022-02-10",
  slug: "getting-started",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
