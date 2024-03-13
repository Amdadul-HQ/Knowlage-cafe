

import Blogs from '../Blogs/Blogs';
import { useState } from 'react';
import Booksmark from '../BooksMark/Booksmark';

const Main = () => {
    const [booksmark,setBooksmark] = useState(0);
    const [titles,setTitles] = useState([])

    const handelAddBooksMark = (title) => {
        setBooksmark(booksmark + 1)
        const newTitles = [...titles,title]
        setTitles(newTitles)
    }


    return (
        <main className='max-w-screen-xl mx-auto flex gap-x-6'>
            <Blogs handelAddBooksMark={handelAddBooksMark} ></Blogs>
            <Booksmark booksmark={booksmark} titles={titles} ></Booksmark>
        </main>
    );
};

export default Main;