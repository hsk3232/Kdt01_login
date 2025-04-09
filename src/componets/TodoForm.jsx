import TailButton from "../UI/TailButton"
import TailSelect from "../UI/TailSelect"
import { useRef } from "react"


export default function TodoForm(addTodo) {
    const textRef = useRef();
    const completedRef = useRef();

    const handleAdd = () => {
        if (!textRef.current.value()) {
            alert("할 일을 입력하지 않았어요😆")
            return;
        }

        addTodo(textRef.current.value(), completedRef.current.value())
    }

    const handleEdit = () => {
        if (textRef.current.value()) {
            textRef.current.value = ""
        } else {
            alert("지울 내용이 없어요🧐")
        }
    }

    return (
        <div className="w-full p-2 flex justify-center items-center rounded-xl bg-sky-200 gap-2">
            <TailSelect className="w-35"
                id="sel" ref={completedRef}
                onChange ={() => {}} //쓸 필요 없어서 빈 함수로 대체
                ops={["O", "X"]}
            />

            <input type="text"
                ref={textRef}
                className="w-6/10 h-10 bg-white px-4 border border-gray-300 rounded-md" placeholder="✏️ 할 일을 적어보아요 ✏️" />

            <TailButton  
                caption="추가"
                color="blue"
                onClick={handleAdd} />

            <TailButton
                caption="재입력"
                color="red"
                onClick={handleEdit} />
        </div>
    )
}
