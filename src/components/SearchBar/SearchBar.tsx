import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"
import { FormValue, SearchBarProps } from "../../types"


const SearchBar : React.FC <SearchBarProps> = ({onChangeQuery}) => {
  const initialValues : FormValue = {
    query: ''
  }
  const handelsubmit = (values : FormValue) => {
    console.log(values)
    onChangeQuery(values.query)
  }
  return (
    <div className={s.box}>
      <Formik initialValues={initialValues} onSubmit={handelsubmit}>
        <Form>
          <Field name='query' 
            autoComplete="off" 
            autoFocus 
            placeholder="Search images and photos"
            className={s.input}
          />
          <button className={s.submit} type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchBar