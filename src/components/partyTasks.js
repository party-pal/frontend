import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import {Hiv, Section, Part,Button, P, Div} from "./styledWidgets";

const Tasks = ({ errors, touched, status }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (status){
    setTasks([...tasks, status])}
  }, [status])

  return (

        <Part className='create-box'>
        <Section>
        <Form >

        <Div>
          <p>Add Task</p>
        <Field type="text" name="task" placeholder="Task"  /> 
        { touched.task && errors.task && <P className="error">{errors.task}</P> }
        </Div>

        <Div>
        <p>Add Cost</p>
        <Field type="number" name="cost" placeholder="Cost: $"  />
        { touched.cost && errors.cost && <P className="error">{errors.cost}</P> }

        </Div>

        <Div>
        <p>Select Category</p>
        <Field component="select" name="category">
          <option value="" disabled> Select Category: </option>
          <option value="food"> Food </option>
          <option value="drinks"> Drinks </option>
          <option value="entertainment"> Entertainment </option>
        </Field>
        { touched.category && errors.category && <P className="error">{errors.category}</P> }
        </Div><br/>


        <p>Add Notes</p>
        <Field component="textarea" name="notes" placeholder="Notes" />
        { touched.notes && errors.notes && <P className="error">{errors.notes}</P> }<br/>

        <Button type="submit">Submit</Button><br/>
      
        </Form>

        <Hiv className='task-list'>
          <h2>Task</h2>
        {tasks.map((item, index) => (
        <Item key={index}> 
          <h3>Item  :-{ item.task}</h3>
          <h3>Cost  : { item.cost}</h3> 
          <h3>category: { item.category}</h3> 
          <h3>notes: { item.notes}</h3> 
        </Item>

        ))}
        </Hiv>

        </Section>


        </Part>
   
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
    category: yup.string().required('category is required')
  }),
  handleSubmit: (values, { setStatus }) => {
    axios.post('https://reqres.in/api/tasks', values)
      .then((resp) => {
        console.log(resp)
        setStatus(resp.data)
      })
      .catch(err => console.log(err))
  }
})(Tasks)