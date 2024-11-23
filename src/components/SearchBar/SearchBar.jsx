import { Field, Form, Formik } from "formik"

const SearchBar = ({onChangeQuery}) => {
  const initialValues = {
    query: ''
  }
  const handelsubmit = (values) => {
    console.log(values)
    onChangeQuery(values.query)
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handelsubmit}>
        <Form>
          <Field name='query'/>
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchBar