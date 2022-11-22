import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


const InputFilter = ({data, props, sort, order,setFilteredResults}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [searchInput, setSearchInput] = useState('');

  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null
  })
  
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        console.log(filteredData,"filterdata");
        setFilteredResults(filteredData)
    }
    else{
      console.log(data,"data");
        setFilteredResults(data)
    }
}

    return(
<div>

<div class="container-fluid">
  <div class="row">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
  </div>
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
           <p>Action Type</p>
           <input name="action_type" onChange={(e) => searchItems(e.target.value)}
                        />
           {/* <select name="action_type" style={{
                    paddingTop:"9px"}}>
  
                    <option></option>
                    {data.map(info => {
                        return <option key={info.actionType == null ? "-/-"  : info.actionType.replace( /_/g, " " )} >
                            {info.actionType == null ? "-/-"  : info.actionType.replace( /_/g, " " )}
                        </option>
                    })}
                   
                </select> */}
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>Application Type</p>
           <input name="application_type" onChange={(e) => searchItems(e.target.value)}
                        />
           {/* <select name="application type" style={{
                    paddingTop:"9px"}}>
  
                    <option></option>
                    {data.map(info => {
                        return <option key={info.applicationType == null ?  "----": info.applicationType.replace( /_/g, " " )} >
                            {info.applicationType == null ?  "----": info.applicationType.replace( /_/g, " " )}
                        </option>
                    })}
                   
                </select> */}
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
        <div class="col-sm-2">
        <label>
           <p>Application ID</p>
           <input name="application_id" onChange={(e) => searchItems(e.target.value)}
                        />
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p></p>
           <button type="button" class="btn btn-primary">Submit</button>
         </label>
       
        </div>
       
      </div>
      <br></br>
      
      <br></br>
    </div>
   
  
  
 
</form>
</div>
    );

    
}
export default InputFilter;