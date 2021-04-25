/** @format */

import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "welcome the choice is either to repel the provision blind fault",
    image: "bg1.jpg",
    excerpt:
      "and takes it takes to find and easy to follow accepted discomfort may be just about all of us is the result of an architect",
    date: "2022-02-10",
    slug: "getting-started",
  },
  {
    title: "And it is blinding",
    image: "bg.jpg",
    excerpt:
      "and takes it takes to find and easy to follow accepted discomfort may be just about all of us is the result of an architect",
    date: "2022-02-10",
    slug: "getting-started-1",
  },
  {
    title: "great pain to open for them",
    image: "my-life-through-a-lens.jpg",
    excerpt:
      "and takes it takes to find and easy to follow accepted discomfort may be just about all of us is the result of an architect",
    date: "2022-02-10",
    slug: "getting-started-2",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
