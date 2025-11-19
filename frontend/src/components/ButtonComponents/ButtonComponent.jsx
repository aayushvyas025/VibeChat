import { IconComponent } from "../index";
function ButtonComponent({
  children,
  btnType = "button",
  styling,
  btnText,
  btnIcon,
  btnIconSize,
  btnIconStyle,
  onClickHandler,
  disabled
}) {
  return (
    <button type={btnType} className={styling} onClick={onClickHandler} disabled={disabled}>
      {btnText}
      {btnIcon && (
        <IconComponent
          icon={btnIcon}
          iconSize={btnIconSize}
          styling={btnIconStyle}
        />
      )}
      {children}
    </button>
  );
}

export default ButtonComponent;
