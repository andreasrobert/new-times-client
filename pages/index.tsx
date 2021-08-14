import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import { Container, Box, Flex } from "@chakra-ui/react";
import Page from '../components/page';
import { useEffect, useState } from 'react';
import Crypto from '../components/crypto';
import Nyt from '../components/nyt'
import Guardian from '../components/guardian'

export default function Home() {

  const [data,setData] = useState([])

  const [search, setSearch] = useState("SEARCH")
  const [searching, setSearching] = useState(false)

  const handleSubmit = (event:any)=> {
    event.preventDefault();
    // setSearch(input)
    // getNews()
    setSearching(true)
  }

  const getNews = async (search:string) =>{
    setSearching(false)
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
    // getHeadLines("");
  }, [search])

  return (
   <Container minW="100%" pos="absolute" px={{mb:"40px"}} >

   <Header handleSubmit={(event:any)=>handleSubmit(event)} search={search}></Header>
   <Flex flexDir={{base:"column",tb:"row"}} justifyContent="center">
   <Flex flexDir="column" alignItems="center" mt="40px" pr={{tb:"30px"}} borderRight={{tb:"1px solid black"}} >
  <Flex flexDir="column" alignItems="center" justifyContent="center"  mt="-40px" >
   { data.map((news:any)=>{
     return <Page key={news.title} news={news}></Page>
   })}
   </Flex>
   </Flex>
   <Flex flexDir={{tb:"column"}} justifyContent="space-between" alignItems="center" mt="44px" ml={{tb:"30px"}} px={{base:"15px", mb:"none"}} flexWrap="wrap">
   <Crypto></Crypto>
   <Nyt searching={searching} search={search}></Nyt>
   <Guardian searching={searching} search={search}></Guardian>
   </Flex>
   </Flex>

    <Box w="200px" h="200px" bg="blue" onClick={()=>getNews(search)}></Box>
    <Box w="200px" h="200px" bg="green" onClick={()=>getHeadLines(search)}></Box>

   </Container>
  )
}
