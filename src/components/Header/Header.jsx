import dayjs from 'dayjs';
import logo from '../../assets/icons/logo.png';
import HeadlineTicker from './HeadlineTicker';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='h-60'>
            <div className='flex justify-center'>
            <img src={logo}/>
            </div>
            <div className='text-center text-base-200'>
            <p className='my-3'>Journalism Without Fear or Favour</p>
            <p><span className='text-black mr-2'>{dayjs().format('dddd,')}</span>{dayjs().format('MMMM DD, YYYY')}</p>
            </div>
            <HeadlineTicker />
            <Navbar />
        </div>
    );
};

export default Header;