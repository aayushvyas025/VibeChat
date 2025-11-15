function ButtonComponent({btnType="button", styling, btnText}) {
  return (
    <button type={btnType} className={styling}>
        {btnText}
    </button>
  )
}

export default ButtonComponent