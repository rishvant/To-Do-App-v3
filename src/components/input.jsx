import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todoSlice";
import toast from 'react-hot-toast';
import { IoIosAddCircleOutline } from "react-icons/io";

const Input = () => {
    const dispatch = useDispatch();
    const todoNameRef = useRef(null);
    const todoDateRef = useRef(null);

    const handleButtonClick = async (event) => {
        event.preventDefault();
        const toDoName = todoNameRef.current.value;
        const todoDateVal = todoDateRef.current.value;
        try {
            if (toDoName === "") {
                toast.error("Please enter the todo");
            }
            else if (todoDateVal === "") {
                toast.error("Please enter todo date");
            }
            else {
                const toDoDate = new Date(todoDateVal).toLocaleDateString('en-IN');
                dispatch(addTodo({ todoName: toDoName, todoDate: toDoDate }));
                todoNameRef.current.value = "";
                todoDateRef.current.value = "";
                toast.success("Todo added successfully");
            }
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    return (
        <>
            <form className="flex flex-row justify-center gap-[20px] mt-[5%] w-[90%] sm:w-[500px] " onSubmit={handleButtonClick}>
                <input type="text" ref={todoNameRef} className="w-[55%] border-[2px] border-black px-2 rounded-md" placeholder="Enter Todo Here" />
                <input type="date" ref={todoDateRef} className="w-[35%] border-[2px] border-black px-2 rounded-md" />
                <button type="submit" className="w-fit bg-green-600 px-2 py-1 rounded-md text-white"><IoIosAddCircleOutline className="text-3xl" /></button>
            </form>
        </>
    );
}

export default Input;
