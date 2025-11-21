import {createBrowserRouter} from 'react-router-dom';
import AboutPage from '../pages/AboutPage.jsx';
import Course from "../pages/Course.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Contact from "../pages/Contact.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AboutPage/>
    },
    {
        path: '/Course',
        element: <Course/>
    },
    {
        path: '/AboutUs',
        element: <AboutUs/>
    },
    {
        path: '/Contact',
        element: <Contact/>
    }
]);