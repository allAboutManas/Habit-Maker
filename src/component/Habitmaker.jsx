import React, { useState } from 'react'
import "./style.css"

export default function Habitmaker({array}) {
    const [habbit,SetHabbit]=useState({what:"",where:"",why:"",when:"", name:""});
    function handleChange(e){
        e.preventDefault();
        SetHabbit({...habbit,[e.target.id]:e.target.value,})
    }
    function handleSubmit(e){
        e.preventDefault();
        array(habbit);
        SetHabbit({what:"",where:"",why:"",when:"", name:""})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input type="text" className='what' id="what" value={habbit.what} onChange={handleChange} placeholder=' What to do' required/>
                <input type="text" className='where' id="where" value={habbit.where} onChange={handleChange} placeholder=' Where to do' required/><br />
                <input type="text" className='why' id="why" value={habbit.why} onChange={handleChange} placeholder=' Why to do' required/>
                <input type="date" className='when' id="when" value={habbit.when} onChange={handleChange} required/>
                <button className='savebtn' >Save</button>

            </form>
        </div>
    )
}
