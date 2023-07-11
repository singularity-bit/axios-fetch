import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPost } from "@/funcs/posts";
import { useLoading } from "@/hooks/useLoading";

const PagesId = () => {
  const [loading]=useLoading()
  const [post,setPost]=useState()
  const {query} = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await getPost(query.id);
      setPost(post);
    };
    query.id && fetchPosts();
  }, [query]);
  return loading ?? <div>{post?.body}</div>;
};

export default PagesId;
