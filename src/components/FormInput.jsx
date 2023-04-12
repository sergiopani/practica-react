

const FormInput = (props) => {
    const { name, onChange, placeholder, message } = props;
    console.log(message);
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
