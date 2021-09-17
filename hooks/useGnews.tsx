import {  FormEvent, useEffect, useState } from "react";

export default function useNewsAPI() {  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("SEARCH")
  const [searching, setSearching] = useState(false)

  const handleSubmit =  (value:string) => (event:FormEvent) => {
    event.preventDefault();
    setSearch(value)
    getNews(value)
    setSearching(true)
  }

  const getNews = async (search:string) =>{
    setSearching(true)
    const res = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&token=7cecdcfe48e63c0905b8913ff5a83367`);
    const result = await res.json();
    setData(result.articles)
  } 

  const getHeadLines = async (search:string) =>{
    setSearching(false)
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?q=${search}&country=us&lang=en&token=7cecdcfe48e63c0905b8913ff5a83367`);
    const result = await res.json();
    setData(result.articles)
  } 


  useEffect(() => {
    if(searching){
      // getNews(search)
    }else{
    getHeadLines("");
    }
  }, [search,searching])

  return { data, search, searching, handleSubmit };
}
