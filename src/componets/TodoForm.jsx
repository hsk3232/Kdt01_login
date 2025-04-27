import TailButton from "../UI/TailButton"
import TailSelect from "../UI/TailSelect"
import { useEffect, useRef } from "react"

// TodoList에서 TodoForm을 사용하기 위해서 props로 addTodo를 받아옴
export default function TodoForm({ addTodo }) {
    const textRef = useRef();
    const refSel = useRef();

    const handleAdd = () => {
        if (textRef.current.value == "") {
            alert("할 일을 입력하지 않았어요😆")
            return;
        }

       addTodo(textRef.current.value, refSel.current.value)
    }

    const handleEdit = () => {
        if (textRef.current.value) {
            textRef.current.value = ""
        } else {
            alert("지울 내용이 없어요🧐")
        }
    }

    useEffect(() => { 
        refSel.current.value = "X" //초기값 설정
        
    }, []) 



    return (
        <div className="w-full mt-10 flex justify-between items-center rounded-xl bg-sky-200 gap-2">
           <div className="w-1/5 pl-3">
            <TailSelect 
                id="sel" refSel={refSel}
                handleChange ={() => {}} //쓸 필요 없어서 빈 함수로 대체
                ops={["O", "X"]}
            />
            </div>

            <input type="text"
                ref={textRef}
                className="w-3/5 h-10 bg-white border border-gray-300 rounded-md" placeholder="✏️ 할 일을 적어보아요 ✏️" />
                
            <div className="w-1/5 pl-3 flex">
            <TailButton  
                caption="추가"
                color="blue"
                onClick={handleAdd} />

            <TailButton
                caption="재입력"
                color="red"
                onClick={handleEdit} />
            </div>
        </div>
    )
}
