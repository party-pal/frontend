import React, { useState, useEffect }  from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function SignUp({ errors, touched, status }){
	const [users, setUsers] = useState([])

	useEffect(() => {
		if (status){
			setUsers([...users, status])
		}
	}, [status])

	return (
		<Form>
			<h1> Create an Account </h1>
			{ touched.firstname && errors.firstname && <p className="error">{errors.firstname}</p> }
			<Field type="text" name="firstname" placeholder="First" /> <br/>

			{ touched.lastname && errors.lastname && <p className="error">{errors.lastname}</p> }
			<Field type="text" name="lastname" placeholder="Last" /> <br/>

			{ touched.email && errors.email && <p className="error">{errors.email}</p> }
			<Field type="email" name="email" placeholder="Email" /> <br/>

			{ touched.password && errors.password && <p className="error">{errors.password}</p> }
			<Field type="password" name="password" placeholder="Password" /> <br/>

			{ touched.passwordverify && errors.passwordverify && <p className="error">{errors.passwordverify}</p> }
			<Field type="password" name="passwordverify" placeholder="Verify Password" /> <br/>

			<button type="submit"> Create </button>

			{users.map((user, index)=>(
				<div key={index}>
					first: {user.firstname}
				</div>
			))}

		</Form>
		)
}




export default withFormik({
	mapPropsToValues: (values) => {
		return {
			firstname: values.firstname || '',
			lastname: values.lastname || '',
			email: values.email || '',
			password: values.password || '',
			passwordverify: values.passwordverify || ''
		}
	},
	validationSchema : yup.object().shape({
		firstname: yup.string().required('Please enter your first name'),
		lastname: yup.string().required('Please enter your last name'),
		email: yup.string().required('Please enter in your email'),
		password: yup.string().required('Please enter in a password'),
		passwordverify: yup.string().required('Password entered does not match'),
	}),
	handleSubmit: (values, { setStatus }) => {
		axios.post('https://reqres.in/api/users', values)
			.then((resp)=>{
				setStatus(resp.data)
			})
			.catch((err)=> console.log(err))
	}
})(SignUp);