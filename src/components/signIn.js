import React from "react";
import {withFormik, Form, Field} from "formik"
import * as yup from "yup"
import axios from "axios"
import {Container, SignInput, Button, Image} from "./styledWidgets";
import image from "../images/banquet.jpg"
import {Link} from "react-router-dom"

function SignIn(){

    return(
		<Container>
			
			<Image src={image}></Image>
			
		   <SignInput>
		   <Form>
		   <h4>Log in to you accout</h4>
           <Field type="text" name="emailaddress" placeholder="Email"/> <br/>
           <Field type="password" name="password" placeholder="Password"/> <br/>
           <Button type="submit">Log In</Button>
		   <p>not a member yet? </p>
		   <Link to="/signup">Sign-Up</Link>
		   </Form>
        </SignInput>
		
		</Container>
        
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
	handleSubmit: (values, { setStatus }) => {
		axios.post('https://party-pal.herokuapp.com/api/auth/login', values)
			.then((resp)=>{
				console.log(resp.data)
				setStatus(resp.data)
			})
			.catch((err)=> console.log(err))
	}
})(SignIn);;