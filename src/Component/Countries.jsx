import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() { 
  const [countries,setcountries]=useState([])
  const [loading,setloading]=useState(false)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

const fetchcountries = (page)=>{
  setloading(true)

  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
  .then(response => response.json())
  .then((res)=>{
    setcountries(res.data)
    setTotalPages(res.totalPages)
    setloading(false)
  })
  .catch((error)=>{
    console.log(error)
    })
}

useEffect(()=>{
  setloading(true)

  fetchcountries(page)
},[page])

 if (loading) return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">

        {countries.map((e)=>(
          <CountriesCard key={e.id} country={e.country} population={e.population} />

        ))}
          </div>
      <div>
        <Pagination  currentpage={page} total={totalPages} onChange={(newpage)=>setPage(newpage)} />
      </div>
    </div>
  );
}

export default Countries;
