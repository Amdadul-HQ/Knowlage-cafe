
import PropTypes from 'prop-types';

const Booksmark = ({titles,readingTime}) => {
    return (
        <div className='flex-1'>
            <h1 className='text-2xl font-semibold text-[#6047EC] px-12 py-5 bg-[rgba(96,71,236,0.10)] mb-6 border border-[#6047EC] rounded-lg'>Spent time on read : {readingTime} </h1>
            <div className='p-8 bg-[rgba(17,17,17,0.05)] rounded-lg'>
                <h1 className='text-2xl font-bold text-[#111]'>Bookmarked Blogs :{titles.length}</h1>
                    {
                        titles.map((title,index) => <h1 className='text-lg font-semibold p-5 rounded-lg bg-[#fff] mt-4' key={index}>{title}</h1>)
                    }
            </div>
        </div>
    );
};

Booksmark.propTypes = {
    titles:PropTypes.array,
    readingTime:PropTypes.number.isRequired
};

export default Booksmark;