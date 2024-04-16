import s from './Search.module.css'
import { Field, Form, Formik } from 'formik'


const SearchBar = ({ setSearchParams }) => {
	const initialValues = {
		search: '',
	}
	const handleSubmit = values => {
		setSearchParams(values.search ? { query: values.search } : {})
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={s.form}>
				<Field className={s.input} name='search' placeholder='Search movie...'  />
				<button className={s.btn} type='submit' >Search</button>
			</Form>
		</Formik>
	)
}

export default SearchBar