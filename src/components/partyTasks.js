import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


function Tasks({status}){
	const [tasks, setTasks] = useState([])

	useEffect(() => {
    	if (status){
    		setTasks([...tasks, status])}
  }, [status])
	// useEffect to post each item into the DB 

	return(
		<div className="task">
			<h1> To Do Lit for XXXX party </h1>
			<div className="task-container">
				<Form >
					<Field type='text' name='task' placeholder='Task' /><br/>
					<Field type='number' name='cost' placeholder='$'/><br/>
					<button> Add </button>
				</Form>
				<ul>
					{tasks.map((item, index)=>{
						return (
							<li key={index}> {item} </li>
							)
					})}
				</ul>
			</div>
		</div>
		)
}

export default withFormik({
	mapPropsToValues: (values) => {
		return {
			task: values.task || '',
			cost: values.cost || '',
		}
	},
	validationSchema : yup.object().shape({
		task: yup
			.string()
			.required('Please enter in a task'),
		cost: yup
			.number()
			.required('Please enter the cost'),
	}),
	handleSubmit: (values, { setStatus }) => {


		axios.post('https://reqres.in/api/users', values)
			.then((resp)=>{
				setStatus(resp)
				console.log(resp)
			})
			.catch((err)=> console.log(err))
	}
})(Tasks);