import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MangodbContext } from "../mangodbContext";

export default function SignUpPage() {

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
    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        };
    
        fetch('/users/signup', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            });
    }    

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const url = '/users/signup';
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     };
    //     fetch(url, requestOptions)
    //         .then((response) => {
    //             if(!response.ok) {
    //                 throw new Error(response.status);
    //             };
    //             navigate('/');
    //             return response.json();
    //         })
    //         .catch(err => {
    //             console.log(err.response.status);
    //             console.log(err.response.data);
    //             console.log(err.message);
    //             setError(err.response.data.message);
    //         });
    // };

    return(
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} >
                <input name="email" onChange={(handleChange)} type="text" placeholder="enter email" />
                <input name="username" onChange={(handleChange)} type="username" placeholder="enter username" />
                <input name="password" onChange={(handleChange)} type="password" placeholder="enter password" />

                <button type="submit">signup</button>
            </form>
            {/* <p>Don't have an account? <Link to="/users/signup">Sign up!</Link></p> */}
        </div>
    );
};