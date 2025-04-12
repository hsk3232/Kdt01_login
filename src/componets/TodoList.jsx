import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const baseUrl = "http://localhost:3005/todos"

export default function TodoList() {
    const [tags, setTags] = useState([]) ;

    // baseurl의 데이터를 가져오는 함수
    const getData = async () => {
        const data = await axios.get(baseUrl);
        console.log(data.data)
        setTags(data.data) ;
    }

    // 데이터를 추가하는 함수
    const addTodo = async (text, completed) => {
        await axios.post(baseUrl, {
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
    // 데이터를 식별하기 위한 id는 랜덤값으로 입력됨
    const handleToggle = async (id) => {
    const resp = await axios.patch(baseUrl + `/${id}`);
    const todo = resp.data;

    const done = todo.completed == "O" ? "X" : "O";
    //patch(주소, 바꿀 내용)
    await axios.patch(baseUrl+`/${id}`, {completed: done,});
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
            {tags && tags.map( item =>
            <TodoItem key={item.id}  // 데이터에 id가 있으면 필수!
            tags={item}    // item 하나씩 전달
            handleDelete={handleDelete} handleToggle={handleToggle} />)}
            </div>
        </div>
    )
}
