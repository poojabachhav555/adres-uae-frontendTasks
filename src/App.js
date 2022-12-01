import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
// import Loggertable from './Loggertable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loggertable1 from './components/Loggertable1';
import Pagination from './components/Pagination';
import InputFilter from './components/InputFilter';

const baseURL = "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f";


function App() {

  const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const [currentRecordsNew, setCurrentRecordsNew] = useState([]);
    const [currentOrder, setCurrentOrder] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    const [allpages, setallpage] = useState(10);
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

  // console.log("data--",data);
  // console.log(recordsPerPage);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  // setnPages(nPages);
  
  //console.log('currentRecords==', currentRecords, nPages);
  //console.log(nPages);
  function handleSort(e){
    console.log(e)
    if(e == "logId"){
      if(currentOrder =='asc'){
        let currentRecordsNew = [];
        let order = 'desc'
        currentRecordsNew = data.sort((a,b) =>  b.logId - a.logId)
       console.log('logIddataAsc--', currentRecordsNew);
      //  setCurrentRecordsNew(currentRecordsNew);
       setCurrentOrder(order);
       filteredResultsHandle(currentRecordsNew);
      }
      else{
      let currentRecordsNew = [];
      let order = 'asc'
      currentRecordsNew = data.sort((a,b) => a.logId - b.logId)
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
     filteredResultsHandle(currentRecordsNew);

    }
  }

  if(e == "applicationId"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = data.sort((a,b) =>  b.applicationId - a.applicationId)
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
     filteredResultsHandle(currentRecordsNew);

    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = data.sort((a,b) => a.applicationId - b.applicationId)
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
   filteredResultsHandle(currentRecordsNew);

  }
}
  if(e == "appType"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = data.sort((a,b) => b.applicationType?.localeCompare(a.applicationType))
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
     filteredResultsHandle(currentRecordsNew);

    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = data.sort((a,b) => a.applicationType?.localeCompare(b.applicationType))
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
   filteredResultsHandle(currentRecordsNew);

  }
  }
  if(e == "action"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = data.sort((a,b) => b.actionType?.localeCompare(a.actionType))
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
     filteredResultsHandle(currentRecordsNew);

    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = data.sort((a,b) => a.actionType?.localeCompare(b.actionType))
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
   filteredResultsHandle(currentRecordsNew);

  }
  }
  if(e == "date"){
    if(currentOrder =='asc'){
      let currentRecordsNew = [];
      let order = 'desc'
      currentRecordsNew = data.sort((a,b) => b.creationTimestamp?.localeCompare(a.creationTimestamp))
     console.log('logIddataAsc--', currentRecordsNew);
     setCurrentRecordsNew(currentRecordsNew);
     setCurrentOrder(order);
     filteredResultsHandle(currentRecordsNew);

    }
    else{
    let currentRecordsNew = [];
    let order = 'asc'
    currentRecordsNew = data.sort((a,b) => a.creationTimestamp?.localeCompare(b.creationTimestamp))
   console.log('logIddataAsc--', currentRecordsNew);
   setCurrentRecordsNew(currentRecordsNew);
   setCurrentOrder(order);
   filteredResultsHandle(currentRecordsNew);

  }
  }
}
const  filteredResultsHandle = (event) => {
  console.log('filterDsts' , event)
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = event.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(event.length / recordsPerPage);
  setallpage(nPages);

  // console.log(currentRecords,"currentRecords");
  setFilteredResults(event);
  console.log(nPages,"nPages")
}

function handleorderReset(){
  setCurrentRecordsNew([]);
  setCurrentOrder(false);
}
const prefilterresultHandle = (event) => {
  console.log('filterDsts' , event)
}
  return (
    
    <div className="App">
      
      <InputFilter currentPage
      data={data.length > 0 ? data : data}
      FilteredResultsHandle={(e) => filteredResultsHandle(e)}
      filteredResultsNew={filteredResults}
      />
      <Loggertable1 data={currentRecordsNew.length > 0 ? currentRecordsNew : currentRecords} sort={event => handleSort(event)} order={currentOrder}
      filteredResults={filteredResults}
      currentPage={currentPage}/>
      <Pagination
                nPages={allpages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                orderReset={() => handleorderReset()}
            />
    </div>
  );
}

export default App;
