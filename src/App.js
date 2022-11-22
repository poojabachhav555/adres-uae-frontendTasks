import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
// import Loggertable from './Loggertable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loggertable1 from './Loggertable1';
import Pagination from './Pagination';
import InputFilter from './InputFilter';

const baseURL = "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f";


function App() {

  const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const [currentRecordsNew, setCurrentRecordsNew] = useState([]);
    const [currentOrder, setCurrentOrder] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
      axios.get(baseURL)
          .then(res => {
                  setData(res.data.result.auditLog
                    );
                  setLoading(false);
              })
              .catch(() => {
                  alert('There was an error while retrieving the data')
              })
  }, [])

  console.log("data--",data);
  // console.log(recordsPerPage);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  
  //console.log('currentRecords==', currentRecords, nPages);
  //console.log(nPages);
  function handleSort(e){
    console.log(e)
    if(e == "logId"){
      if(currentOrder =='asc'){
        let currentRecordsNew = [];
        let order = 'desc'
        currentRecordsNew = currentRecords.sort((a,b) =>  b.logId - a.logId)
       console.log('logIddataAsc--', currentRecordsNew);
       setCurrentRecordsNew(currentRecordsNew);
       setCurrentOrder(order);
      }
      else{
      let currentRecordsNew = [];
      let order = 'asc'
      currentRecordsNew = currentRecords.sort((a,b) => a.logId - b.logId)
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
    }
  }

  if(e == "applicationId"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = currentRecords.sort((a,b) =>  b.applicationId - a.applicationId)
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = currentRecords.sort((a,b) => a.applicationId - b.applicationId)
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
  }
}
  if(e == "appType"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = currentRecords.sort((a,b) => b.applicationType?.localeCompare(a.applicationType))
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = currentRecords.sort((a,b) => a.applicationType?.localeCompare(b.applicationType))
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
  }
  }
  if(e == "action"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = currentRecords.sort((a,b) => b.actionType?.localeCompare(a.actionType))
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = currentRecords.sort((a,b) => a.actionType?.localeCompare(b.actionType))
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
  }
  }
  if(e == "date"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = currentRecords.sort((a,b) => b.creationTimestamp?.localeCompare(a.creationTimestamp))
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = currentRecords.sort((a,b) => a.creationTimestamp?.localeCompare(b.creationTimestamp))
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
  }
  }
}

function handleorderReset(){
  setCurrentRecordsNew([]);
  setCurrentOrder(false);
}
  return (
    
    <div className="App">
      
      <InputFilter 
      data={currentRecordsNew.length > 0 ? currentRecordsNew : currentRecords}
      setFilteredResults={setFilteredResults}
      />
      <Loggertable1 data={currentRecordsNew.length > 0 ? currentRecordsNew : currentRecords} sort={event => handleSort(event)} order={currentOrder}
      filteredResults={filteredResults}/>
      <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                orderReset={() => handleorderReset()}
            />
    </div>
  );
}

export default App;
