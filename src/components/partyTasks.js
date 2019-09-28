import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import{Container} from "./styledWidgets"

const Tasks = ({ errors, touched, status }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (status){
    setTasks([...tasks, status])}
  }, [status])

  return (
  	<div className='create-box'>
      <Container>
      <h1> To-Do List for XXXXXX Party </h1>
	    <Form >
		      { touched.task && errors.task && <p className="error">{errors.task}</p> }
		      <Field type="text" name="task" placeholder="Task"  /> 

		      { touched.cost && errors.cost && <p className="error">{errors.cost}</p> }
		      <Field type="number" name="cost" placeholder="Cost: $"  />

		      { touched.category && errors.category && <p className="error">{errors.category}</p> }
		      <Field component="select" name="category">
		        <option value="" disabled> Select Category: </option>
		        <option value="food"> Food </option>
		        <option value="drinks"> Drinks </option>
		        <option value="entertainment"> Entertainment </option>
		      </Field>

		      <Field component="textarea" name="notes" placeholder="Notes" />

		      <button type="submit">Submit</button>
		      
	    </Form>

	    <div className='task-list'>

	      {tasks.map((item, index) => (
	        <Item key={index}> 
	        Item: {item.task} <br/>
	        Cost: {item.cost}
	        </Item>
	        
	        ))}
      	</div>
      </Container>
  		


    </div>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      task: values.task || '',
      cost: values.cost || '',
      category: values.category || '',
      notes: values.notes || ''
    }
  },
  validationSchema: yup.object().shape({
    task: yup.string().required('task is required'),
    cost: yup.number().positive().required('cost is required'),
    category: yup.string().required('category is required'),
  }),
  handleSubmit: (values, { setStatus }) => {
    axios.post('https://reqres.in/api/tasks', values)
      .then((resp) => {
        setStatus(resp.data)
      })
      .catch(err => console.log(err))
  }
})(Tasks)