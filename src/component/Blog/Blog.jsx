import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Blog = ({blog,handelAddBooksMark,handelMarkAsRead}) => {
    const {title,coverImg,author_img,author_name,reading_time,publish_date,has_tag} = blog

    return (
        <div className='space-y-6 border-b-2 pb-3'>
            <div>
              <img className='w-[845px] h-[450px] rounded-lg' src={coverImg} alt="" />
            </div>
            <div className='flex justify-between max-w-[845px]'>
                <div className='flex gap-x-6'>
                    <div>
                        <img className='h-14 w-14 rounded-full' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>{author_name}</h3>
                        <p className='text-base font-semibold text-[rgba(17,17,17,0.60)]'>Publish Date : {publish_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <p className='text-xl font-medium text-[rgba(17,17,17,0.60)]'>{reading_time} mins</p>
                    <button className="text-xl" onClick={() => handelAddBooksMark(title)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
          <h1 className='text-4xl text-[#111] font-bold max-w-[740px]'>{title}</h1>
          <div className='flex gap-x-4 text-[rgba(17,17,17,0.60)] text-xl font-medium'>
              <p>#{has_tag[0]}</p>
              <p>#{has_tag[1]}</p>
              <p>#{has_tag[2]}</p>
          </div>
          <button onClick={() => handelMarkAsRead(reading_time,title)} className='text-xl font-semibold text-[#6047EC] underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handelAddBooksMark:PropTypes.func.isRequired,
    handelMarkAsRead:PropTypes.func.isRequired
};

export default Blog;