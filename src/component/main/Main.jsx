

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
    console.log(titles);
    const handelMarkAsRead = (time,title) => {
        setReadingTime(readingTime + time);
        const newTitles = titles.filter( heading => heading !==title)
        setTitles(newTitles)

    }

    return (
        <main className='max-w-screen-xl mx-auto flex gap-x-6'>
            <Blogs handelAddBooksMark={handelAddBooksMark} handelMarkAsRead={handelMarkAsRead} ></Blogs>
            <Booksmark  readingTime={readingTime} titles={titles} ></Booksmark>
        </main>
    );
};

export default Main;