import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

export default function Banner() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const getData = async () => {
    setLoader(true);
    try{
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1"
    );
    const banData = await response.json();
    setData(banData.results[6])
    console.log("done");
    setTimeout(() => {
      setLoader(false)
    }, 2000);
    
    }
    catch(err) { 
      setLoader(false);
      return;
    }
    
  };
  useEffect(() => {
    getData();
  }, []);

  if(loader){
    return(
      <div className="load">
    <CircularProgress/>
    </div>
    );
  }
  return ( 
   <div className="cont">
    {console.log(data)}
    <img className="banner-img" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}/>
    <p className="img-txt">{data.overview}</p>
   </div>
  )
}
