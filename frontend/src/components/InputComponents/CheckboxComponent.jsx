import React from 'react'

function CheckboxComponent({label}) {
  return (
        <div className="form-control">
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>
                    {label}
                </span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
  )
}

export default CheckboxComponent