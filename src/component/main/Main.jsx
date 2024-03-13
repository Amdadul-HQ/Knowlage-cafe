

import Blogs from '../Blogs/Blogs';
import { useState } from 'react';
import Booksmark from '../BooksMark/Booksmark';

const Main = () => {
    const [booksmark,setBooksmark] = useState(0);
    const [titles,setTitles] = useState([])
    const [readingTime,setReadingTime] = useState(0)

    const handelAddBooksMark = (title) => {
        if(!(titles.includes(title))){
            setBooksmark(booksmark + 1)
            const newTitles = [...titles,title]
            setTitles(newTitles)
        }
    }
    const handelMarkAsRead = time => {
        setReadingTime(readingTime + time);
    }

    return (
        <main className='max-w-screen-xl mx-auto flex gap-x-6'>
            <Blogs handelAddBooksMark={handelAddBooksMark} handelMarkAsRead={handelMarkAsRead} ></Blogs>
            <Booksmark booksmark={booksmark} readingTime={readingTime} titles={titles} ></Booksmark>
        </main>
    );
};

export default Main;