function CheckboxComponent({ label, inputGender, onChangHandler,checked,styling }) {
  return (
    <div className="form-control">
      <label className={`label gap-2 cursor-pointer ${styling}`}>
        <span className="label-text">{label}</span>
        <input
          type="checkbox"
          name="gender"
          className="checkbox border-slate-900"
          value={inputGender}
          checked={checked}
          onChange={onChangHandler}
        />
      </label>
    </div>
  );
}

export default CheckboxComponent;
