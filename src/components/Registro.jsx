import { useRef, useState } from "react";
import FormInput from "./FormInput";

const validation = {
    'username': 'Tiene que estar entre 3 y 10',
    'email': 'Tiene que ser email valido',
    'password': 'Tener todas las letras'
};


const Registro = () => {
    const [values, setvalues] = useState({
        username: '',
        email: '',
        password: ''
    });
    //Para prevenir el multiple renders uso useRef con la referencia al input
    // const usernameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        //!todo añadir al contexto
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
                values.username < 3 || values.username > 10 ? validation.username : ''
            } />
            <FormInput name="email" placeholder="email" onChange={onChange} message={
                values.email < 3 || values.email > 10 ? validation.email : ''
            } />
            <FormInput name="password" placeholder="password" onChange={onChange} message={
                values.password < 3 || values.password > 10 ? validation.password : ''
            } />
            <button>Register</button>
        </form>
    );
};

export default Registro;
