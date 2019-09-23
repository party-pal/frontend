import React from "react";
import { Form, Field, withFormik} from "formik";


function AddParty(){
    return(
        <div>
            <h2>Add party</h2>
            <Form>
            <p>Number of guests</p>
            <Field type="number" name="Number" placeholder="Number of guests"/>
            <p>Date of the Party</p>
            <Field type="date" name="Date" />
            </Form>

        </div>
    )
}

export default withFormik({

})(AddParty);