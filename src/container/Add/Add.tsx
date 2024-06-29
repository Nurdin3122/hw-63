import React, {ChangeEventHandler, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import {Blog, Post, Posts} from "../../type.ts";

interface Props {
    blog:Blog[];
}

const Add:React.FC<Props> = ({blog}) => {
    const navigate = useNavigate();
    const [post, setPost] = useState<Post>({
       title:"",
       text:"",
    });
    const onFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        const posts :Posts = {
            post,
            blog:blog,
        };

        try {
            await axiosApi.post('/blog.json',posts)
        } finally {
            navigate('/');
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    let form = (
        <form onSubmit={onFormSubmit} >
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    id="title" type="text" name="title"
                    value={post.title}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <textarea
                    id="text" type="text"
                    name="text"
                    className="form-control"
                    value={post.text}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
                Save
            </button>
        </form>
    )
    return (
        <>
            <div className="row mt-2">
                <div className="col">
                    {form}
                </div>
            </div>
        </>
    );
};

export default Add;