import React,{useState,useEffect} from "react";
import { Form, Field, withFormik} from "formik";
import * as yup from "yup";
import axios from "../utils/axiosWithAuth"
import {Button,Divs, Div,P } from "./styledWidgets";
import history from "../utils/history"

function AddParty({errors,touched,status}){
    const[addParty,setAddParty]=useState([])

    useEffect(()=>{
        // console.log(status)
        if (status){
            setAddParty([...addParty,status])
        }
    },[status])

    return(
        <Divs>


        <Form>
        <Div>
        <p>Party Title</p>
        <Field type="text" name="partytitle" placeholder="Title of the Party"/>
        { touched.partytitle && errors.partytitle && <P className="error">{errors.partytitle}</P>}
        </Div>


        <Div>
        <p>Number of guests</p>
        <Field type="number" name="guestCount" placeholder="Number of guests"/>
        { touched.guestCount && errors.guestCount && <p className="error">{errors.guestCount}</p>}
        </Div>

        <Div>
        <p>Date of the Party</p>
        <Field type="date" name="date" />
        { touched.date && errors.date && <p className="error">{errors.date}</p>}
        </Div>

        <Div>
        <p>Party Theme</p>
        <Field type="text" name="theme" placeholder="Theme of the Party"/>
        { touched.theme && errors.theme && <p className="error">{errors.theme}</p>}
        </Div>

        <br/><br/><Button type="submit"> Create </Button>
        </Form>

        </Divs>

       
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
		return {
            partytitle:values.partytitle || '',
			guestCount: values.guestCount || '',
            date: values.date || ''	,
            theme:values.theme ||'',
           
		}
    },
    validationSchema : yup.object().shape({
        partytitle: yup
			.string()
            .required('Please enter the title'),
        guestCount: yup
			.number()
			.required('Please enter the number of guests'),
		date: yup
			.date()
            .required('Please enter the date of your party'),
        theme: yup
			.string()
            .required('Please enter the Theme of your party'),
            
    }),
    
    handleSubmit: (values, { setStatus }) => {
		
        axios().post('/parties', {...values})
        
			.then((resp)=>{
                console.log(resp)
                setStatus(resp)
                history.push('/parties/home')
			})
			.catch((err)=> console.log(err))
	}

})(AddParty);