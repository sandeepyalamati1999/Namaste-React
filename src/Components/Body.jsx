
import {useState , useEffect} from "react";
import Restaurents from "./Restaurents";

const Body = () => {

  const [resData, setResData] = useState([]);
  const [filteredResList , setFilteredResList] = useState([]);
  const [searchInputValue , setSearchInputValue] = useState('');

  

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async () => {
    // https://proxy.cors.sh/ for cores issue 
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      const result = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(result);
      setResData(result);
      setFilteredResList(result);
  }

    const getToptatingRestarents = () => {
      let filteredData = resData?.filter((res)=> res?.info?.avgRating > 4);
      setFilteredResList(filteredData);
    }


    const handleOnClick = () => {
      let filterData = resData?.filter((res)=> res?.info?.name.toLowerCase().includes(searchInputValue.toLowerCase()));
      setFilteredResList(filterData);
      setSearchInputValue('');

    }

    return (
      <div>
        <div className="Search">
          <input type="text" value = {searchInputValue} onChange={(e)=>{setSearchInputValue(e.target.value);}}/>
          <button className="search-btn" onClick={handleOnClick}>Search</button>
          <button className="top-res-btn" onClick={getToptatingRestarents}>Top Rated Restaurents</button>
        </div>
        <div className="res-container">
          {filteredResList.map((res) => {
            return (
              <Restaurents
                key={res.info.id}
                name={res.info.name}
                rating={res.info.avgRating}
                cuisines={res.info.cuisines.join(", ")}
                costForTwo={res.info.costForTwo}
                cloudinaryImageId = {res.info.cloudinaryImageId}
              />
            );
          }
          )}
         
        </div>
      </div>
    );
  };
  export default Body;