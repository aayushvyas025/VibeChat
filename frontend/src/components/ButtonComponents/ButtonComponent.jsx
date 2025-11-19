import { IconComponent } from "../index";
function ButtonComponent({
  btnType = "button",
  styling,
  btnText,
  btnIcon,
  btnIconSize,
  btnIconStyle,
  onClickHandler
}) {
  return (
    <button type={btnType} className={styling} onClick={onClickHandler}>
      {btnText}
      {btnIcon && (
        <IconComponent
          icon={btnIcon}
          iconSize={btnIconSize}
          styling={btnIconStyle}
        />
      )}
    </button>
  );
}

export default ButtonComponent;
