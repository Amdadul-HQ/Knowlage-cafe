
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelAddBooksMark}) => {
    const[blogs,setBlogs] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])



    return (
        <div className='space-y-10'>
            {
                blogs.map(blog => <Blog key={blog.id} handelAddBooksMark={handelAddBooksMark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelAddBooksMark:PropTypes.func.isRequired,
};

export default Blogs;