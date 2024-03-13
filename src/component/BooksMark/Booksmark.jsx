
import PropTypes from 'prop-types';

const Booksmark = ({booksmark,titles}) => {
    return (
        <div className='flex-1'>

            <div className='p-8 bg-[rgba(17,17,17,0.05)] rounded-lg'>
                <h1 className='text-2xl font-bold text-[#111]'>Bookmarked Blogs :{booksmark}</h1>
                    {
                        titles.map((title,index) => <h1 className='text-lg font-semibold p-5 rounded-lg bg-[#fff] mt-4' key={index}>{title}</h1>)
                    }
            </div>
        </div>
    );
};

Booksmark.propTypes = {
    booksmark:PropTypes.number,
    titles:PropTypes.string
};

export default Booksmark;