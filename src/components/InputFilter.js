/* eslint-disable */

import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import {useNavigate,useLocation} from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";


const InputFilter = ({data, props, sort, order,setFilteredResults, FilteredResultsHandle}) => {

    const [actionType, setActiontypeValue] = useState('');
    const [applicationtype, setapllicationtype] = useState('');
    const [applicationid, setapllicationid] = useState('');

  const [startdate, setstartdate] = useState();
  const [enddate, setenddate] = useState();
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
console.log("inputfilterdata",data);

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
  navigate(""+urlStr);
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
var filteredData=new Object();
  let filterData = [];
  if(actionType != "")
  {
    filterData["actionType"] = actionType;
  }
  if(applicationtype != "")
  {
    filterData["applicationType"] = applicationtype;
  }
  if(fromdate != "" && fromdate!="Invalid Date")
  {
    filterData["fromDate"] = fromdate;
  }
  if(todate != "" && todate!="Invalid Date")
  {
    filterData["toDate"] = todate;
  }
  if(applicationid != "")
  {
    filterData["applicationId"] = applicationid;
  }  
  // if(applicationtype != "")
  //   filterData["applicationType"] = applicationtype;
  // if(fromdate != "")
  //   filterData["fromDate"] = fromdate;
  // if(todate != "")
  //   filterData["toDate"] = todate;
  // if(applicationid != "")
  //   filterData["applicationId"] = applicationid;

  filteredData = data.filter((item) => {
    let formLength = 0;
    let matchItem = 0;
    for (var key in filterData){
            console.log("key: "+key+" val "+filterData[key]);
            //return Object.values(item).join('').toLowerCase().includes(avalue.toLowerCase())
            if(filterData[key])
            {
                formLength++;    

                if(isNaN(filterData[key])) //filtering alphanumeric
                {
                  if(item[key])
                  {
                    if((item[key].toLowerCase()).toString().includes(filterData[key].toLowerCase()))
                    {
                      matchItem++;
                    }
                  }
                  
                }
                else {   //filtering numeric
                  if(item[key])
                  {
                    if((item[key]).toString().includes(filterData[key]))
                    {
                      matchItem++;
                    }
                  }

                }
                if(key === "fromDate" || key === 'toDate') //code to handle start & end date filterring
                {
                  let newDt = getNewDate(item['creationTimestamp']);
                  let fromNewDt = filterData['fromDate'];
                  let toNewDt = filterData['toDate'];
                  if(newDt >= fromNewDt && newDt <= toNewDt)
                  {
                    matchItem++;
                  }
                      
                } 
            }
          }
          console.log(matchItem+"--"+formLength);
          if (matchItem === formLength) 
          {
            return item;
           
          }   
         
  
  });

  FilteredResultsHandle(filteredData)
  // console.log("filterData====",filteredData)


  

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
           <select name="application_type" style={{
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