import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MangodbContext } from "../mangodbContext";

export default function LoginPage({ onLogin }) {

    const navigate = useNavigate();

    const { 
        formData, 
        setFormData, 
        error,
        setError, 
    } = useContext(MangodbContext);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();
        const url = '/users/login';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Include formData in the request body
        };
        fetch(url, requestOptions)
            .then((response) => {
                if(!response.ok) {
                    throw new Error(response.status);
                };
                return response.json();
            })
            .then((data) => {
                let token = data;
                localStorage.setItem('token', token);
                onLogin(formData);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    return(
        <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} >
            <input name="email" onChange={handleChange} type="text" />
            <input name="password" onChange={(handleChange)} type="password" />
            <button type="submit">Login</button>
        </form>
        {/* <p>Don't have an account? <Link to="/users/signup">Sign up!</Link></p> */}
    </div>
    );

}