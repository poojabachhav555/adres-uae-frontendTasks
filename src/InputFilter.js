/* eslint-disable */

import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import {useNavigate,useLocation} from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";


const InputFilter = ({data, props, sort, order,setFilteredResults, FilteredResultsHandle}) => {

    const [actionType, setActiontypeValue] = useState('');
    const [applicationtype, setapllicationtype] = useState('');
    const [applicationid, setapllicationid] = useState('');

  const [startdate, setstartdate] = useState(new Date());
  const [enddate, setenddate] = useState(new Date());
  let navigate = useNavigate();
  let currentPath  = useLocation();
  let path = currentPath.search;
  const query = new URLSearchParams(path);
  useEffect(() => {
    if(query.get('startdate'))
    setstartdate(new Date(query.get('startdate')));
    if(query.get('enddate'))
    setenddate(new Date(query.get('enddate')));  
  },[path]);


//   const searchItems = (searchvalue) => {
//     if (searchvalue !== '') {
//         const filteredData = data.filter((item) => {
//             return Object.values(item).join('').toLowerCase().includes(searchvalue.toLowerCase())
//         })
//         console.log(filteredData,"filterdata");
//         FilteredResultsHandle(filteredData)
//     }
//     else{
//       console.log(data,"data");
//         setFilteredResults(data)
//     }
// }
    //function to format date
    const getNewDate = (dt) => {
      let date = new Date(dt);
      let month = parseInt(date.getMonth())+parseInt(1);
      let newDt = date.getFullYear()+"-"+month+"-"+date.getDate();
      return newDt;
    }
const handleNavigation = (event) => {
  console.log("in navigation call")
  const formData = new FormData(event.currentTarget);
  event.preventDefault();   
  let urlStr = "?"; 
  for (let [key, value] of formData.entries()) {
    if(value)
    {
      if(urlStr.length === 1 && urlStr === '?')
        urlStr = urlStr +key+"="+value;
      else
        urlStr = urlStr + '&'+key+"="+value;
    } 
  }
  if(startdate && enddate)
  {
      if(urlStr.length === 1 && urlStr === '?')
        urlStr = urlStr+"startdate="+getNewDate(startdate)+"&enddate="+getNewDate(enddate);
      else
        urlStr = urlStr+"&startdate="+getNewDate(startdate)+"&enddate="+getNewDate(enddate);
  }
  handleSubmit();
  navigate("/logger"+urlStr);
}


var actType = data.reduce((unique, o) => {
  if(!unique.some(obj => obj.actionType === o.actionType )) {
    unique.push(o);
  }

return unique;
  
},[]);

var apptype = data.reduce((unique1, o) => {
  if(!unique1.some(obj => obj.applicationType === o.applicationType )) {
    unique1.push(o);
  }

return unique1;
  
},[]);

const handleChangeactiontype = (searchvalue) => {
  setActiontypeValue(searchvalue)
}
const handleChangeapllicationtype = (searchvalue) => {
  setapllicationtype(searchvalue)
}

const handleChangeapllicationid= (searchvalue) => {
  setapllicationid(searchvalue)
}
  
  const handleSubmit = () => {
    var fromdate = new Date(startdate).toLocaleString()
    var todate = new Date(enddate).toLocaleString()
console.log("in submit",actionType,applicationtype,fromdate,todate,applicationid);



//   if (actionType !== '') {
//       const filteredData = data.filter((item) => {
//           return Object.values(item).join('').toLowerCase().includes(actionType.toLowerCase())
//       })
//       console.log(filteredData,"filterdata");
//       FilteredResultsHandle(filteredData)
//   }
 
//   if (applicationtype !== '') {
//     const filteredData = data.filter((item) => {
//         return Object.values(item).join('').toLowerCase().includes(applicationtype.toLowerCase())
//     })
//     console.log(filteredData,"filterdata");
//     FilteredResultsHandle(filteredData)
// }
var filteredData=[];
if(actionType !== '' || applicationtype !== ''){
  let filterData = [];
  filterData =[actionType ,applicationtype];
  console.log('filterData',filterData)
  if(actionType !== '' && applicationtype !== ''){
    console.log('data=========',data)
     data.filter((item) => {
      if((filterData.includes(item.applicationType )) && (filterData.includes(item.actionType))){
        console.log('item',item);
        filteredData.push(item);
           


      }
      FilteredResultsHandle(filteredData);
              
          })
  }

  console.log(filterData,"filterData====")

}

  

  }


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
  
<form onSubmit={handleNavigation}>
    <div class="container-fluid">
      <div class="row">
      
        <div class="col-sm-2">
        <label>
           <p>Action Type</p>
           {/* <input name="action_type" onChange={(e) => searchItems(e.target.value)} */}
                        {/* /> */}
           <select name="action_type" style={{
                    paddingTop:"9px"}} onChange={(e) => handleChangeactiontype(e.target.value)}>
                      <option />
  {actType.length > 0 ? actType.map((val, i) => (
              <option key={i} value={val.actionType} >
                {val.actionType}
              </option>
            )) : ''}
            

                </select>
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>Application Type</p>
           {/* <input name="application_type" onChange={(e) => searchItems(e.target.value)}
                        /> */}
           <select name="application type" style={{
                    paddingTop:"9px"}} onClick={(e) => handleChangeapllicationtype(e.target.value)}>
  
  <option />
  {apptype.length > 0 ? apptype.map((val, i) => (
              <option key={i} value={val.applicationType}>
                {val.applicationType}
              </option>
            )) : ''}
                </select>
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           
           <p className="startDate">From: </p> <div className="datePickerLabel"></div>
           <DatePicker selected={startdate} onChange={(date) => setstartdate(date)} />
           
   
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           
           <p className="todate" >To:</p> <div className="datePickerLabel"></div>
           <DatePicker selected={enddate} onChange={(date) => setenddate(date)} />
    
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
           <p>Application ID</p>
           <input name="application_id"
                        onKeyPress={(e) => handleChangeapllicationid(e.target.value)}/>
         </label>
       
        </div>
        <div class="col-sm-2">
        <label>
          
           <button type="submit" class="btn btn-primary"  style={{
                    marginTop:"38px"}}>Submit Logger</button>
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