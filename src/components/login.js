import React from 'react';
import { Form, Field } from 'formik';


function Login(){
	return (
		<Form>
			<h1> Sign Up! </h1>
			<Field type="string" name="firstname" placeholder="First" /> <br/>
			<Field type="string" name="lastname" placeholder="Last" /> <br/>
			<Field type="email" name="email" placeholder="Email" /> <br/>
			<Field type="password" name="password" placeholder="Password" /> <br/>
			<Field type="password" name="passwordverify" placeholder="Verify Password" /> <br/>
			
		</Form>
		)
}




export default Login;