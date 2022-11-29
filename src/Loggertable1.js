import React, { useState, useEffect } from 'react'
// import JsonData from "./data.json";
import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import Pagination from './Pagination';
import Arrow from "./images/sort_img.png"



const Loggertable1 = ({data, props, sort, order,filteredResults}) => {
console.log('currentOrder', order);
console.log('filteredResults', filteredResults);


// const [isTrue, setIsTrue] = useState(false)
 
// useEffect(()=>{

//  const em = emp?.filter(e =>  `${e?.applicationId}`.includes(search)||`${e?.applicationType}`.includes(search)|| `${e?.actionType}`.includes(search))
 
//  setEmpone(em)

  
// },[search])

// useEffect(()=>{
//   const startYear = `${startDate}`.split('-')[0];
//   const endYear = `${endDate}`.split('-')[0];
//   const startDay = `${startDate}`.split('-')[1];
//   const endDay = `${endDate}`.split('-')[1];
//   const startMonth = `${startDate}`.split('-')[2];
//   const endMonth = `${endDate}`.split('-')[2];
  
//   if(isSearch){
// const em = emp?.filter(e=> {
//  if(`${e.creationTimestamp}`.split('-')[1]>= startDay && `${e.creationTimestamp}`.split('-')[1]<= endDay && startDay != endDay){
//     return true
//   }
//   else if(`${e.creationTimestamp}`.split('-')[2]>= startMonth && `${e.creationTimestamp}`.split('-')[2]<= endMonth && startMonth != endMonth){
//     return true
//   }


// })

//   }
// },[startDate,endDate])
// console.log(data,"data-----")
    return (  
        <div class="container-fluid">
           
<div class="row">
<Table  class="table table-striped">
            <thead>
                <tr>
                <th>Log id <span onClick={() => sort('logId')}>{order == 'asc' ?  <img src={Arrow} alt="sort" style={{
                    transform:"rotate(0deg)",
                    height:"10px"
                }} ></img> : <img src={Arrow} alt="sort" style={{
                    transform:"rotate(180deg)",
                    height:"10px"
                }} ></img>}</span>
                </th>
                <th>Application type <span onClick={() => sort('appType')}>{order == 'asc' ?  <img src={Arrow} alt="sort" style={{
                    transform:"rotate(0deg)",
                    height:"10px"
                }} ></img> : <img src={Arrow} alt="sort" style={{
                    transform:"rotate(180deg)",
                    height:"10px"
                }} ></img>}</span></th>
                <th>Application Id<span onClick={() => sort('applicationId')}>{order == 'asc' ?  <img src={Arrow} alt="sort" style={{
                    transform:"rotate(0deg)",
                    height:"10px"
                }} ></img> : <img src={Arrow} alt="sort" style={{
                    transform:"rotate(180deg)",
                    height:"10px"
                }} ></img>}</span></th>
                
                <th>Action<span onClick={() => sort('action')}>{order == 'asc' ?  <img src={Arrow} alt="sort" style={{
                    transform:"rotate(0deg)",
                    height:"10px"
                }} ></img> : <img src={Arrow} alt="sort" style={{
                    transform:"rotate(180deg)",
                    height:"10px"
                }} ></img>}</span></th>
                <th>Action Details</th>
                <th>Date: Time<span onClick={() => sort('date')}>{order == 'asc' ?  <img src={Arrow} alt="sort" style={{
                    transform:"rotate(0deg)",
                    height:"10px"
                }} ></img> : <img src={Arrow} alt="sort" style={{
                    transform:"rotate(180deg)",
                    height:"10px"
                }} ></img>}</span></th>
    
                </tr>
            </thead>
            <tbody>
                
            {filteredResults.length > 0 ? (
               
                filteredResults.map((info => (
                        
                            <tr>
                              <td>{info.logId}</td>
                              <td>{info.applicationType == null ? "-/-"  : info.applicationType.replace( /_/g, " " )}</td>
                        <td>{info.applicationId == null ? "-/-"  : info.applicationId}</td>
                        
                        <td>{info.actionType == null ? "-/-"  : info.actionType.replace( /_/g, " " )}</td>
                        <td>-/-</td>
                        <td>{info.creationTimestamp}</td>
                            </tr>
                        )))
                ) : (
                data.map(info => (
                    <tr>
                      <td>{info.logId}</td>
                      <td>{info.applicationType == null ? "-/-"  : info.applicationType.replace( /_/g, " " )}</td>
                <td>{info.applicationId == null ? "-/-"  : info.applicationId}</td>
                
                <td>{info.actionType == null ? "-/-"  : info.actionType.replace( /_/g, " " )}</td>
                <td>-/-</td>
                <td>{info.creationTimestamp}</td>
                    </tr>
                )))
            }

            </tbody>
        </Table>
</div>

        </div>
        
      ) 

                }
          export default Loggertable1;
























    

