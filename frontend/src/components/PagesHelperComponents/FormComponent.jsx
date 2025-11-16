function FormComponent({children, onSubmitHandler, styling}) {
  return (
    <form onSubmit={onSubmitHandler} className={styling}>
        {children}
    </form>
  )
}

export default FormComponent