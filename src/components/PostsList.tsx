import React from "react";
import useFetchData from "../hooks/useFetchData";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostsList: React.FC = () => {
  const { data, error, isLoading } = useFetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsList;
