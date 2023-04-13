import { useEffect, useState } from "react";

const Ajax = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        console.log('Iniciando el componente');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <form onSubmit={handleSubmit}>
            <input />
            <input />
            <input />
        </form>
    );
};

export default Ajax;
