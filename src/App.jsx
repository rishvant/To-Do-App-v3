import Input from './components/input';
import Head from './components/head';
import Items from './components/todo-items';
import Welcome from './components/welcome';
import { useSelector } from 'react-redux';

function App() {
  const todoItems = useSelector((state) => state.todo);
  return (
    <>
      <section className="w-screen h-screen backdrop-blur-xl flex flex-col pt-24 items-center z-[100]">
        <Head></Head>
        <Input></Input>
        {todoItems?.length === 0 && <Welcome></Welcome>}
        <Items></Items>
      </section>
    </>
  )
}

export default App;