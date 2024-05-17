import React, { useEffect, useState } from 'react';
import { auth } from '../../Firebase/FirebaseConfig';
import { UserAuth } from '../../Context/AuthContext';
import Google from "../../Images/googleLogo.svg";
import Button from '../../UI/Button';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationMain = () => {

    const { googleSignIn, user } = UserAuth();
    const nav = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (user != null) {
            nav('/dashboard')
        }
    }, [user])

    return (
        <section className='registration-container px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto py-16 h-screen flex items-center justify-center'>
            <div className='w-fit mx-auto flex flex-col items-center bg-white border border-gray-200 shadow-2xl shadow-blue-300 p-8 rounded-xl gap-14'>
                <div className='flex flex-col items-center gap-6'>
                    <Link to={"/"}>
                       
                    </Link>
                    <p className='text-Heading font-medium text-xl'>Welcome! Please sign in to continue</p>
                </div>

                <Button style={'text-blue-600 py-3 px-4 rounded-xl border-2 border-blue-400 text-lg bg-white '} img={Google} text={"Sign in with google"} event={handleGoogleSignIn} />
            </div>
        </section>
    )
};

export default RegistrationMain;
