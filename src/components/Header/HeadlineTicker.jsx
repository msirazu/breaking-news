import Marquee from 'react-fast-marquee';

const HeadlineTicker = () => {
    return (
        <div className='flex gap-3 items-center my-5 bg-gray-200 p-3'>
            <div className='bg-secondary py-1 px-3'>
                <p className='text-white'>Latest</p>
            </div>
            <div className=''>
                <Marquee pauseOnHover={true} className=''>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident?</p>
                    <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident?</p>
                </Marquee>
            </div>
        </div>
    );
};

export default HeadlineTicker;