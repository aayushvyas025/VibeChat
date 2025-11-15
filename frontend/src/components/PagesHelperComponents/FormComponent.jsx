function FormComponent({children, onSubmitHandler}) {
  return (
    <form onSubmit={onSubmitHandler}>
        {children}
    </form>
  )
}

export default FormComponent