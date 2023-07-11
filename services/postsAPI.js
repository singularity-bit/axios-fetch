const postsAPI = {
    api: {
      posts: "/posts",
      post:(postID)=>`/posts/${postID}`,
      createPost:'/posts',
      updatePost:(postID)=>`/posts/${postID}`
    },
};
  
export default postsAPI;
  