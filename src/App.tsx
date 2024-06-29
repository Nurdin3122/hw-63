
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import { useState} from "react";
import {Blog} from "./type.ts";
import Add from "./container/Add/Add.tsx";


const App = () => {
    const [cart, setCart] = useState<Blog[]>([
        {
            id:'1',
            author:'nurdin',
            time:'12:00',
            text:"hello",
        },
        {
            id:'2',
            author:'nurdin2',
            time:'12:02',
            text:"hello2",
        },
        {
            id:'3',
            author:'nurdin3',
            time:'12:03',
            text:"hello3",
        },
    ]);



    return (
    <>
      <header>
        <Toolbar></Toolbar>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Home carts={cart}/>}/>
            <Route path="/add" element={<Add blog={cart}/>}/>
        </Routes>
      </main>
    </>
  )
};

export default App
