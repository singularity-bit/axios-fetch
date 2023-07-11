import config from "./apiConfig";

  
const fetchInstance=(fetchConfig)=>{
   return {
    post:async (endpoint,content,config)=>{
       const response= await fetch(`${fetchConfig.baseURL}${endpoint}`, {
            method: "POST",
            body:content,
            ...config,
          });
          const data = await  response.json();
          return {data}
    },
    put:async (endpoint,content,config)=>{
        const response= await fetch(`${fetchConfig.baseURL}${endpoint}`, {
            method: "PUT",
            ...config,
            body:content
          });
          const data = await  response.json();
          return {data}
    },
    get:async (endpoint)=>{
        const response= await fetch(`${fetchConfig.baseURL}${endpoint}`, {
            method: "GET",
            ...config,
          });
          const data = await  response.json();
          return {data}
    }
   }
}

export default fetchInstance(config)