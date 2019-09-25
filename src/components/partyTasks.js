import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


function Tasks(){
	const [tasks, setTasks] = useState([])

	// useEffect to post each item into the DB 

	return(
		<Form>
			<Field type='text' name='task' placeholder='Task' /><br/>
			<Field type='number' name='cost' placeholder='$'/><br/>
			<button> Add </button>
		</Form>
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
	handleSubmit: ({ task, cost }, { setStatus }) => {
		console.log()
		axios.post('https://reqres.in/api/users', {task, cost })
			.then((resp)=>{
				console.log(resp)
				setStatus(resp.data)
			})
			.catch((err)=> console.log(err))
	}
})(Tasks);