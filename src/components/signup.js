import React, { useState, useEffect }  from 'react';
import { withFormik,Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {Container, SignInput, Image, Button} from "./styledWidgets";
import image from "../images/banquet.jpg"

function SignUp({ errors, touched, status }){
	const [users, setUsers] = useState([])

	useEffect(() => {
		if (status){
			setUsers([...users, status])
		}
	}, [status])

	return (

		<Container>
			<Image src={image}></Image>
		   <SignInput>
		   <Form>
		   <h4> Create an Account </h4>
			
			<Field type="text" name="firstname" placeholder="First" /> <br/>
			{ touched.firstname && errors.firstname && <p className="error">{errors.firstname}</p>}
			
			<Field type="text" name="lastname" placeholder="Last" /> <br/>
			{ touched.lastname && errors.lastname && <p className="error">{errors.lastname}</p>}
			
			<Field type="email" name="emailaddress" placeholder="Email" /> <br/>
			{ touched.emailaddress && errors.emailaddress && <p className="error">{errors.emailaddress}</p>}
			
			<Field type="password" name="password" placeholder="Password" /> <br/>
			{ touched.password && errors.password && <p className="error">{errors.password}</p>}
			
			<Field type="password" name="passwordverify" placeholder="Verify Password" /> <br/>
			{ touched.passwordverify && errors.passwordverify && <p className="error">{errors.passwordverify}</p>}
			<Button type="submit"> Create </Button>
			</Form>
        </SignInput>
		</Container>


		)
}




export default withFormik({
	mapPropsToValues: (values) => {
		return {
			firstname: values.firstname || '',
			lastname: values.lastname || '',
			emailaddress: values.email || '',
			password: values.password || '',
			passwordverify: values.passwordverify || ''
		}
	},
	validationSchema : yup.object().shape({
		firstname: yup
			.string()
			.required('Please enter your first name'),
		lastname: yup
			.string()
			.required('Please enter your last name'),
		emailaddress: yup
			.string()
			.required('Please enter in your email'),
		password: yup
			.string()
			.required('Please enter in a password')
			.min(8, "Password must be a minimum of 8 characters")
			.max(13, "Password is too long, please try a shorter one"),
		passwordverify: yup
			.string()
			.required('Password entered does not match')
			.test("passwords-match", "Passwords must match", function(value){
				return this.parent.password === value;
			}),
	}),
	handleSubmit: ({firstname, lastname, emailaddress, password}, { setStatus }) => {
		console.log()
		axios.post('https://party-pal.herokuapp.com/api/auth/register', {firstname, lastname, emailaddress, password})
			.then((resp)=>{
				console.log(resp)
				setStatus(resp.data)
			})
			.catch((err)=> console.log(err))
	}
})(SignUp);