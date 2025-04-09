import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import TodoForm from "./TodoForm";



const baseUrl = "http:localhost:3005/todolist"
export default function TodoList() {
    const [tags, getTags] = useState([]) ;

    // baseurl의 데이터를 가져오는 함수
    const getData = async () => {
        const data = await axios.get(baseUrl);
        console.log(data.data)
        getTags(data.data) ;
    }

    // 데이터를 추가하는 함수
    const addTodo = async (text, completed) => {
        const resp = await axios.post(baseUrl, {
            text: text,
            completed : completed
        })
        //바뀐 데이터를 출력
        getData();
    }

     // 데이터를 삭제하는 함수
    const handleDelete = async (id) => {
    await axios.delete(baseUrl + `/${id}`)
    //바뀐 데이터를 출력
    getData();
}

    // 데이터를 수정하는 함수
    const handleToggle = async (id) => {
    const resp = await axios.patch(baseUrl + `/${id}`);
    const todo = resp.deta;

    const done = todo.completed == "O" ? "X" : "O";
    await axios.patch(baseUrl+`/${id}`, {
        completed: done,
    });
    //바뀐 데이터를 출력
    getData();
    }



    // useEffect를 사용하여 컴포넌트가 마운트될 때 getData 함수를 호출
    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="w-9/10">
            <div className="w-80%">
            <TodoForm addTodo={addTodo} />
            {/* <TodoItem tags={tags} handleDelete={handleDelete} handleToggle={handleToggle} /> */}
            </div>
        </div>
    )
}
