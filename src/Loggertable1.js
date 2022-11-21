import React, { useState, useEffect } from 'react'
// import JsonData from "./data.json";
import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import Pagination from './Pagination';
import Arrow from "./images/down-arrow.png"



const Loggertable1 = ({data, props, sort, order}) => {
console.log('currentOrder', order);
    return (  
        <table className="table">
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
                <th>Date: Time</th>
    
                </tr>
            </thead>
            <tbody>
                {data.map(info => (
                    <tr>
                      <td>{info.logId}</td>
                      <td>{info.applicationType}</td>
                <td>{info.applicationId}</td>
                
                <td>{info.actionType}</td>
                <td>-/-</td>
                <td>{info.creationTimestamp}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      ) 

                }
          export default Loggertable1;
























    

