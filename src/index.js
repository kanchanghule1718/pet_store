import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import App from './App';
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import Sliding from './Sliding';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Form from './form';
import PetDetails from './components/PetDetails';
import Accesories from './components/Accesories';
import CardDetails from './components/CardDetail';
import ThemeProvider from './ThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));

const routes=createBrowserRouter([
    {
        path:'/',
        element:<ThemeProvider>
            <App/>
        </ThemeProvider>,
        errorElement:<ErrorPage/>,
        children:[
            {index:true ,element:<Navbar/>},
            {path:'/home',element:<Navbar/>},
            {path:'/AboutUs',element:<AboutUs/>},
            {path:'/login', element:<Form/>},
            {path:'/acces', element:<Accesories/>},
            {path:'/pets/:id',element:<PetDetails/>},
            {path:'/acces/:id',element:<CardDetails/>},
        ]
    }
])
root.render(
   <RouterProvider router={routes}/>
);


reportWebVitals();
