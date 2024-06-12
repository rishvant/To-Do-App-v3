import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slice/todoSlice";
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Items = () => {
    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todo);
    const handleDelete = (todoDate) => {
        dispatch(deleteTodo({ todoDate }));
        toast.error("Todo removed!", {
            icon: <MdDelete style={{ color: "red" }} />
        });
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-8 w-full">
            {todoItems?.map((item, index) => (
                <div className="flex flex-row items-center justify-center gap-4 border-2 border-black w-[90%] sm:w-[500px] rounded-md py-2 px-2" key={index}>
                    <button className="w-[10%] sm:w-fit h-fit rounded-full border-2 border-green-600 transition-all text-3xl text-green-600 hover:text-white hover:bg-green-600" ><MdDone /></button>
                    <div className="flex flex-col w-[30%]">
                        <p className="text-xl font-semibold break-words">{item.todoName}</p>
                    </div>
                    <p className="text-xl font-semibold w-[30%] break-words">{item.todoDate}</p>
                    <div className="w-[20%] flex flex-row gap-2 flex-wrap justify-center">
                        <button className="w-fit h-fit rounded-md px-2 py-1 border-2 border-blue-600 bg-blue-600 transition-all text-2xl text-white hover:text-blue-600 hover:bg-white"><MdEdit /></button>
                        <button type="button" className="w-fit h-fit rounded-md px-2 py-1 border-2 border-red-600 bg-red-600 text-white transition-all text-2xl hover:text-red-600 hover:bg-white" onClick={() => handleDelete(item.todoDate)}><RiDeleteBinLine /></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;
