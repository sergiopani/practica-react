import { useContext, useEffect, useRef, useState } from "react";
import FormInput from "./FormInput";
import UserContext from "../context/UserContext";

const validation = {
    'username': (value) => {
        return value.length >= 3 && value.length <= 10 ? "" : "Tiene que estar entre 3 y 10";
    },
    'email': (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value) ? "" : "Tiene que ser email valido";
    },
    'password': (value) => {
        return /[a-zA-Z]/.test(value) ? "" : "Tener todas las letras";
    }
};


const Registro = () => {

    //UseContext que apunte al conetexto de usuario
    const { user, setUser } = useContext(UserContext);

    const [values, setvalues] = useState({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        setUser({
            ...user,
            user: 'sergio',
            email: 'sergio'
        });

    }, []);
    //Para prevenir el multiple renders uso useRef con la referencia al input
    // const usernameRef = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const values = [...e.target]
            .filter(el => el.type !== 'submit')
            .map(({ value }) => value);

        const isEmpty = ({ length }) => length < 3 || length > 10;

        values.some(isEmpty) ? console.log('Debe de estar en el rango') :
            console.log('Correcto');
    };

    const onChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        });

        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput name="username" placeholder="username" onChange={onChange} message={
                validation.username(values.username)
            } />
            <FormInput name="email" placeholder="email" onChange={onChange} message={
                validation.username(values.email)
            } />
            <FormInput name="password" placeholder="password" onChange={onChange} message={
                validation.password(values.password)
            } />
            <button type="submit">Register</button>
        </form>
    );
};

export default Registro;
