import React, { useState, useEffect } from 'react'
// import JsonData from "./data.json";
import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import Pagination from './Pagination';
import Arrow from "../images/sort_img.png"



const Loggertable1 = ({data, props, sort, order,filteredResults,currentPage}) => {

    const rowsPerPage=10;
    const page=currentPage-1;
    return (  
        <div className="container-fluid">
           
<div className="row">
<Table  className="table table-striped">
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
            {filteredResults != undefined && filteredResults.length > 0 ? (
               
                filteredResults.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((info => (
                        
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
                data?.map(info => (
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
























    

