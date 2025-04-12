import TailButton from "../UI/TailButton";

export default function TodoItem({ tags, handleDelete, handleToggle }) {


    const handleDel = () => {
        handleDelete(tags.id)
    }

    return (
        <div>
            <div className="w-full flex justify-center items-center gap-2">
                <div className="w-90% flex flex-start items-center">
                    <div onClick={() => handleToggle(tags.id)} className="hover:cursor-pointer">
                        {tags.completed == "O" ? "✅" : "⬜"} {tags.text}</div>
                        <TailButton
                            caption="삭제"
                            color="blue"
                            onClick={handleDel} />
                    
                </div>
            </div>
        </div>

    )
}