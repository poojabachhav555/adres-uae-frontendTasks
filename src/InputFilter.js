import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const InputFilter = ({data, props, sort, order}) => {

  const [startDate, setStartDate] = useState(new Date());

    return(
<div>

<div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
        <h2>
    Logger search
  </h2>

          </div></div>
        <hr></hr>  
          </div>
  
<form>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
        <label>
           <p>Employee Name</p>
           <input name="name" />
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>Action Type</p>
           <select >
  
                    <option></option>
                    {data.map(info => {
                        return <option key={info.actionType} >
                            {info.actionType != "" ? info.actionType : "Null"}
                        </option>
                    })}
                   
                </select>
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>Application Type</p>
           <select >
  
                    <option></option>
                    {data.map(info => {
                        return <option key={info.applicationType} >
                            {info.applicationType != "" ? info.applicationType : "Null"}
                        </option>
                    })}
                   
                </select>
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>From Date</p>
           <div>
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>To Date</p>
           <div>
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
         </label>
       
        </div>
        <div class="col-sm-1">
        <label>
           <p>Application ID</p>
           <input name="name" />
         </label>
       
        </div>
       
      </div>
      <br></br>
      <div class="row">
<div class="col-sm-offset-3">
<button type="button" class="btn btn-primary">Submit</button>
</div>
      
      </div>
      <br></br>
    </div>
   
  
  
 
</form>
</div>
    );

    
}
export default InputFilter;