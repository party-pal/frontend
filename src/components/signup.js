import React, { useState, useEffect }  from 'react';
import { withFormik,Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {Container, SignInput, Image, Button, P, Div} from "./styledWidgets";
import image from "../images/banquet.jpg"
import {Link} from "react-router-dom"
import Home from "./home"
import history from "../utils/history"

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

		   <Div>
			   
			<Field type="text" name="firstname" placeholder="First" /> 
			{ touched.firstname && errors.firstname && <P className="error">{errors.firstname}</P>}
		   </Div>
		   
			<Div>
			<Field type="text" name="lastname" placeholder="Last" /> 
			{ touched.lastname && errors.lastname && <P className="error">{errors.lastname}</P>}
			</Div>
			
			<Div>			
			<Field type="email" name="emailaddress" placeholder="Email" /> 
			{ touched.emailaddress && errors.emailaddress && <P className="error">{errors.emailaddress}</P>}
			</Div>
			
			<Div>			
			<Field type="password" name="password" placeholder="Password" /> 
			{ touched.password && errors.password && <P className="error">{errors.password}</P>}
			</Div>
			
			<Div>			
			<Field type="password" name="passwordverify" placeholder="Verify Password" /> <br/>
			{ touched.passwordverify && errors.passwordverify && <P className="error">{errors.passwordverify}</P>}
			</Div>
			
			
			<Button type="submit"> Create </Button> <br/>
			<Link to="/">Sign-In</Link>
			
			</Form>
        </SignInput>
		{users.map(user=>(<Home info={user} key={user.id}/>))}
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
		
		axios.post('https://party-pal.herokuapp.com/api/auth/register', {firstname, lastname, emailaddress, password})
			.then((resp)=>{
				console.log(resp)
				setStatus(resp.data)
				history.push("/")
			})
			.catch((err)=> console.log(err))
	}
})(SignUp);