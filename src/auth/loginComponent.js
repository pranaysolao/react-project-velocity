import "./logincomponent.scss"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';



export function LoginComponent() {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/pages")
        }
    }, [])

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            //login API
            localStorage.setItem("token", "some-tocken")
              alert(JSON.stringify(values, null, 2));
            navigate("/pages")
        },
    })
    return (
        <div className=" logincomponent container-fluid">
            <Paper elevation={3} className="form-container">
                <h2>Login</h2>
                <form className=" d-flex align-content-center flex-column m-3" onSubmit={formik.handleSubmit}>
                    <TextField fullWidth label="Email" variant="standard" name="email" value={formik.values.email} onChange={formik.handleChange} className="my-2"
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                    <TextField fullWidth label="Password" type="password" variant="standard" name="password" value={formik.values.password} onChange={formik.handleChange} className="my-3"
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} />
                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </Paper>
        </div>
    )
}