import { LuListTodo } from "react-icons/lu";

const Head = () => {
    return (
        <h1 className="flex flex-row items-center gap-3 text-4xl font-semibold">
            <LuListTodo className="text-4xl" />Your TODO
        </h1>
    )
}

export default Head;