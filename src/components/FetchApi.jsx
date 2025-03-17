import { useEffect, useState } from "react"

export const FetchApi=()=>{
  const [data,setData]=useState([]);

  const getData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const comments=await response.json();
    setData(comments)
  }

  useEffect(()=>{
    getData();
  },[]);
  return(
    <div>
        {
            data.map((curr)=>{
                return(
                    <div>
                        <p>{curr.name}</p>
                        <p>{curr.email}</p>
                        <p>{curr.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}