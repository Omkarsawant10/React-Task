import { useState } from "react"
import "./Crud.css"

const objectdata = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
]
export const Crud = () => {
    const [data, setData] = useState(objectdata);
    const [addData, setAddData] = useState({
        name: "",
        email: "",
        body: ""
    })
    const [editedId, setEditedId] = useState(null);

    const handleInput = (e) => {
        const { value, name } = e.target;
        setAddData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const createData = () => {
        if(addData.name==="" || addData.email===""||addData.body===""){
            return;
        }
        if (editedId) {
            setData((prev)=>{
               return prev.map((currdata)=>{
                    return currdata.id===editedId?{...currdata,...addData}:currdata;
                })
            })
            setAddData({
                name:"",
                email:"",
                body:""
            })
            setEditedId(null);
        } else {
            setData((prev) => {
                return [...prev, {
                    postId: 1,
                    id: Date.now(),
                    name: addData.name,
                    email: addData.email,
                    body: addData.body
                }]
            })
            setAddData({
                name:"",
                email:"",
                body:""
            })
        }
    }

    const deleteData = (id) => {
        setData((prev) => {
            return prev.filter((currdata) => {
                return currdata.id !== id;
            })
        })
    }

    const editData = (id, currdata) => {
        setAddData(currdata);
        setEditedId(id);
        
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Name" name="name" value={addData.name} onChange={(e) => handleInput(e)} />
                <input type="text" placeholder="Email" name="email" value={addData.email} onChange={(e) => handleInput(e)} />
                <textarea rows={10} cols={10} value={addData.body} name="body" onChange={(e) => handleInput(e)}></textarea>
                <button onClick={createData}>{editedId ? "Update" : "Add"}</button>

            </div>

            {
                data.map((currdata) => {
                    return (
                        <div key={currdata.id}>
                            <p>{currdata.name}</p>
                            <p>{currdata.email}</p>
                            <p>{currdata.body}</p>
                            <button onClick={() => deleteData(currdata.id)}>Delete</button>
                            <button onClick={() => editData(currdata.id, currdata)}>Edit</button>
                        </div>
                    )
                })
            }

        </>
    )
}


// export const FetchApi=()=>{
//   const [data,setData]=useState([]);

//   const getData=async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
//     const comments=await response.json();
//     setData(comments)
//   }

//   useEffect(()=>{
//     getData();
//   },[]);
//   return(
//     <div>
//         {
//             data.map((curr)=>{
//                 return(
//                     <div>
//                         <p>{curr.name}</p>
//                         <p>{curr.email}</p>
//                         <p>{curr.body}</p>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }