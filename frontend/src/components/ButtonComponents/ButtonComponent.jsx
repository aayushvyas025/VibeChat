import { IconComponent } from "../index";
function ButtonComponent({
  btnType = "button",
  styling,
  btnText,
  btnIcon,
  btnIconSize,
  btnIconStyle,
}) {
  return (
    <button type={btnType} className={styling}>
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
