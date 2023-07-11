import axiosInstance from "@/services/axiosService";
import postsAPI from "@/services/postsAPI";
import fetchInstance from "@/services/fetchService";

export const getPosts = async () => {
  try {
    const { data } = await fetchInstance.get(postsAPI.api.posts);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPost=async(postID)=>{
  try {
      const {data} = await axiosInstance.get(postsAPI.api.post(postID))
      return data
  } catch (error) {
    console.error(error)
  }
}

export const updatePost=async(postID,content)=>{
  try {
    const {data}=  await axiosInstance.put(postsAPI.api.updatePost(postID),JSON.stringify(content),{
      headers:{
        'Content-Type':'application/json; charset=UTF-8'
      }
    })
    return data
  } catch (error) {
    console.error(error)
  }
}
