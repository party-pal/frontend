import React,{useState,useEffect} from "react";
import { Form, Field, withFormik} from "formik";
import * as yup from "yup";
import axios from "../utils/axiosWithAuth"
import ShowParty from "./showParty";
import { Container } from "./styledWidgets";

function AddParty({errors,touched,status}){
    const[addParty,setAddParty]=useState([])

    useEffect(()=>{
        if (status){
            setAddParty([...addParty,status])
        }
    },[status])

    return(
        <div>
        <Container>
            <h2>Add party</h2>
            <Form>

            <p>Party Title</p>
            <Field type="text" name="partytitle" placeholder="Title of the Party"/>
            { touched.partytitle && errors.partytitle && <p className="error">{errors.partytitle}</p>}


            <p>Number of guests</p>
            <Field type="number" name="guestCount" placeholder="Number of guests"/>
            { touched.guestCount && errors.guestCount && <p className="error">{errors.guestCount}</p>}

            <p>Date of the Party</p>
            <Field type="date" name="date" />
            { touched.date && errors.date && <p className="error">{errors.date}</p>}

            <p>Party Theme</p>
            <Field type="text" name="theme" placeholder="Theme of the Party"/>
            { touched.theme && errors.theme && <p className="error">{errors.theme}</p>}
            
            <h4>The Venue</h4>
          
            <p>Cost</p>
            <Field type="number" name="Cost" placeholder="Cost of the Venue"/>
            {touched.Cost && errors.Cost && <p className="errors">{errors.Cost}</p>}

            <p>Location</p>
            <Field type="location" name="Location" placeholder="Location of the Venue"/>
            {touched.Location && errors.Location && <p className="errors">{errors.Location}</p>}

            <br/><br/><br/><button type="submit"> Create </button>
            </Form>

            
            {addParty.map(user=>(<ShowParty info={user} key={user.id}/>))}
        </Container>
            
            

        </div>
       
       
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
		return {
            partytitle:values.partytitle || '',
			guestCount: values.guestCount || '',
            date: values.date || ''	,
            theme:values.theme ||''
            // Cost:values.Cost || '',
            // Location:values.Location

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
        Cost:yup
            .number()
            .required('Please enter the cost'),
         Location:yup
            .string()
            .required('Please enter the location')
		
    }),
    
    handleSubmit: (values, { setStatus }) => {
		
        axios().post('/parties', {...values, userid:1})
        
			.then((resp)=>{
				console.log(resp)
                setStatus(resp.data)
                // history.push('/home')
			})
			.catch((err)=> console.log(err.message))
	}

})(AddParty);