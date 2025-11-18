import App from '../App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <AboutPage />
  }
]);