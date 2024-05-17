import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserAuth } from "../Context/AuthContext";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {

    const { user } = UserAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (user) {
    //         navigate('/dashboard');
    //     }
    // }, [user])

    return (
        <div>
            <div><Navbar /></div>

            <div><Outlet /></div>

            <div><Footer /></div>
        </div>
    )
}

export default Layout
