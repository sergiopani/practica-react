import { useEffect, useState } from "react";


const MyMensaje = ({children, mensaje}) => {
    return (
        <p>
            {mensaje}
        </p>
    )
}
const Fetched = () => {
    const [inputState, setInputState] = useState({
        value: 'Escribe aqui....',        
    });

    const [mensaje, setmensaje] = useState('');

    const handleChange = ({target}) => {
        const {value:toUpdate} = target;

        setInputState({
            ...inputState,
            value:toUpdate
        })

    }

    useEffect(() => {
        console.log('Haciendo fetch')
        fetch('data/productos.json')
        .then(resp => resp.json())
        .then((data)=>{
            const {resp} = data;
            setmensaje(resp);            
        }).catch(() =>{
            setmensaje('error')
        })
    }, [inputState]);
    
  return (
    <>
        <h1>Input fetchedor</h1>      
        <input type="text" onChange={handleChange} placeholder={inputState.value}/>
        <MyMensaje mensaje={mensaje.length > 0 && mensaje} />                    
    </>
  )
}


export{
    Fetched as default
}
