import axios from "axios"


export default function TodoItem({tags, handleDelete, handleToggle}) {


const handleDel = () => {
    if (!tags.length) {
        alert("삭제할 내용이 없어요😆")
        return;
    }
    handleDelete(tags[0].id)
}


handleToggle



return (
    <div>
        <form className="w-full flex justify-center items-center gap-2">
            
                        <TailButton 
                        caption="삭제"
                        color="blue"
                        onClick={handleDel} />
        </form>
    </div>
    )
}