import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <header>
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