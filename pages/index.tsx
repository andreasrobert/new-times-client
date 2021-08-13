import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import { Container, Box, Flex } from "@chakra-ui/react";
import Page from '../components/page';
import { useState } from 'react';
import SideBar from '../components/sideBar';

export default function Home() {

  const [data,setData] = useState([])

  const getNews = async (search:string) =>{
    const res = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&token=7cecdcfe48e63c0905b8913ff5a83367`);
    const result = await res.json();
    setData(result.articles)
  } 

  const getHeadLines = async (search:string) =>{
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?q=${search}&country=us&lang=en&token=7cecdcfe48e63c0905b8913ff5a83367`);
    const result = await res.json();
    setData(result.articles)
  } 

  return (
   <Container minW="100%" pos="absolute" px="40px" >

   <Header></Header>
   {/* <Page></Page> */}
   <Flex justifyContent="center">
   <Flex flexDir="column" alignItems="center">

   { data.map((news:any)=>{
     return <Page key={news.title} news={news}></Page>
   })}
   </Flex>
   <Flex flexDir="column" alignItems="center" mt="30px" ml="25px">
   <SideBar></SideBar>
   </Flex>
   </Flex>

    <Box w="200px" h="200px" bg="blue" onClick={()=>getNews("disney")}></Box>

    <Box w="200px" h="200px" bg="green" onClick={()=>getHeadLines("disney")}></Box>

   </Container>
  )
}
