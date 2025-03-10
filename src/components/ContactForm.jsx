import { useId } from "react";
import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const FeedbackSchema = Yup.object().shape({
      username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"), email: Yup.string().email("Must be a valid email!").required("Required"),
      message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
      level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")});

const initialValues = {
     username: "",
     number: "",
};
export default function ContactForm () {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
		actions.resetForm();
    }
    return (
      <Formik initialValues={ initialValues } 
              onSubmit={handleSubmit}
              validationSchema={FeedbackSchema}>
            <Form className={css.form} >
                <div>
                    <label htmlFor={nameFieldId}>Username</label>
                    <Field className={css.field} type="text" name="username" />
                    <ErrorMessage className={css.error}  name="username" component="span" />
                </div>
                <div>
                    <label htmlFor={numberFieldId}>Username</label>
                    <Field className={css.field} type="email" name="email" />
                    <ErrorMessage className={css.error}  name="email" component="span" />
                </div>

            <button className={css.btn}  type="submit">Add contact</button>
			</Form>
      </Formik>
    );
  };