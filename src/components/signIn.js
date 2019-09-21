import React from "react";
import {withFormik, Form, Field} from "formik"
import * as yup from "yup"
import axios from "axios"


function SignIn(){

    return(
        <Form>
           <Field type="text" name="emailaddress" placeholder="Email"/>
           <Field type="password" name="password" placeholder="Password"/>
           <button type="submit">Log In</button>
        </Form>
    )
}

export default withFormik({
	mapPropsToValues: (values) => {
		return {
			emailaddress: values.email || '',
			password: values.password || ''
		}
	},
	validationSchema : yup.object().shape({
	
		emailaddress: yup
			.string()
			.required('Please enter in your email'),
		password: yup
			.string()
			.required('Please enter in a password')
			.min(8, "Password must be a minimum of 8 characters")
			.max(13, "Password is too long, please try a shorter one")
	}),
	handleSubmit: ({emailaddress, password}, { setStatus }) => {
		axios.post('https://party-pal.herokuapp.com/api/auth/login', {emailaddress, password})
			.then((resp)=>{
				console.log(resp)
				setStatus(resp.data.token)
			})
			.catch((err)=> console.log(err))
	}
})(SignIn);;