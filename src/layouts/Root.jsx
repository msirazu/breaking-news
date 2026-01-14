import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='mx-auto w-10/12'>
            <header className='flex justify-center h-80 items-center'>
                <Header/>
            </header>
            <main>
            <aside></aside>
            <Outlet />
            <aside></aside>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Root;