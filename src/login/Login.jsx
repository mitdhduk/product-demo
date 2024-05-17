import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../config";
import axios from "axios";
import './login.css'

const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validate: (values) => {
            let errors = {}
            if (!values.email) {
                errors.email = "Please enter email"
            }
            if (!values.password) {
                errors.password = "Please enter password"
            }
            return errors
        },

        onSubmit: (Values) => {

            try {
                console.log(ENDPOINT);
                axios.post(`${ENDPOINT}/auth/login`, {
                    username: Values.email,
                    password: Values.password
                }).then(res => {
                    if (res?.status == 200 && res?.data?.token) {
                        localStorage.setItem('token', res?.data?.token)
                        localStorage.setItem('userData', JSON.stringify(res?.data))
                        navigate('/user/dashboard')
                    }
                }).catch(error => {
                    console.log(error);
                })
            } catch (error) {
                console.log(error.message);
            }
            
        }
    })

    return (

        <>
            <h1>Login Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        style={{border : "2px solid black", backgroundColor : " darkgray", width: "200px"}}
                        placeholder="Enter email"
                        className={formik.errors.email && 'is-error'}
                    />
                    {formik.errors.email && <p className="error-txt">{formik.errors.email}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter password"
                        style={{border : "2px solid black", backgroundColor : " darkgray", width: "200px"}}
                        className={formik.errors.password && 'is-error'
                        }
                    />
                    {formik.errors.password && <p className="error-txt">{formik.errors.password}</p>}
                </div>
                <div>
                    <button type="submit"  className="login" style={{backgroundColor : "darkgray", color : "white" }}>Login</button>
                </div>
            </form>
        </>

    )
}
export default Login;