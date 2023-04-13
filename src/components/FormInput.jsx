import { useState } from "react";


const FormInput = (props) => {

    const { name, onChange, placeholder, message } = props;

    return (
        <div className="formInput">
            <label>{placeholder}</label>
            <input
                type="text"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
            <span>{message}</span>
        </div>
    );
};

export default FormInput;
