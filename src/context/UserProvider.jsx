import { useState } from 'react';
import UserContext from './UserContext';

/**
 * Recibimos todos los childrens
 * es decir todos los componentes que va a tener dentro
 */
const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        user: '',
        email: ''
    });

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
