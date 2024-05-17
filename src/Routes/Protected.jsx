import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Protected = ({ children }) => {

    const { user } = UserAuth();
    const nav = useNavigate();

    useEffect(() => {
        if (!user) {
            return nav('/registration')
        }
    }, [user])

    return children
}

export default Protected
