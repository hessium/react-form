import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from './store/formSlice';


function ContactForm() {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form);

    const handleChange = (field) => (e) => {
        dispatch(updateField({field, value: e.target.value}));
    }

    return (
        <Formik
            initialValues={form}
            // validation and submission logic goes here
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.message) {
                    errors.message = 'Required';
                }
                return errors;
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name"
                               onChange={handleChange('name')} value={form.name}/>
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email"
                               onChange={handleChange('email')} value={form.email}/>
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label htmlFor="message">Пол:</label>
                        <Field as="select" id="message" name="message"
                               onChange={handleChange('sexsual')} value={form.sexsual}>
                            <option value="">Не выбранно</option>
                            <option value="мужской">мужской</option>
                            <option value="женский">женский</option>
                        </Field>
                        <ErrorMessage name="sexsual" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}
export default ContactForm;