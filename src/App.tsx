
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import { useEffect, useState} from "react";
import {Blog} from "./type.ts";
import Add from "./container/Add/Add.tsx";
import axiosApi from "./axiosApi.ts";

const App = () => {
    const [cart, setCart] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axiosApi.get('/blog.json');
                const postsArray: Blog[] = Object.keys(data).map(key => ({
                    id: key,
                    title: data[key].post.title,
                    text:data[key].post.text,

                }));
                setCart(postsArray);
            } catch (error) {
                console.error('ошибка', error);
            }
        };

        void fetchPosts();
    }, []);

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
