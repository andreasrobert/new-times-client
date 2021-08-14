import { Flex, Heading, Text, GridItem, Grid, Box, Image, NumberIncrementStepper } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Playfair Display SC";
  font-size: 70px;
  text-align: center;
  justify-content: center;
  /* color:black; */
`;

const H2 = styled.h2`
  font-family: "EB Garamond";
  font-weight: 400;
  font-size: 20px;
`;


function Page(props:{news:any}) {
  // console.log(props.news.description.length + "  " + [props.news.title])
  // console.log(props.news.url)

  const [size, setSize]= useState(1)
  // let postSize = 0

  // if (size < 350) postSize = 3
  // if (size < 250) postSize = 2
  // if (size < 50) postSize = 1

  //  {props.news.title} 
  //  {props.news.description} 
  //  {props.news.url} 
  //  {props.news.image} 
  //  {props.news.publishedAt} 
   
  const options = { year: "numeric", month: "long", day: "numeric" }
  const newsDate = new Date(props.news.publishedAt).toLocaleDateString(undefined,{year:"numeric", month:"long", day:"numeric"})

  
  useEffect(() => {
    if(props.news.description.length < 150){
      setSize(2)
    }
  
  }, [props.news.description.length])


  return (
    <>
      <Flex h="100%" flexDir="column" w={{base:"90%",mb:"550px"}} mt="30px"  d={{base:"flex",mb:size === 2 ? "none" : "flex"}}>
        <Link href={props.news.url || ''} passHref>
          <a>
        <Heading cursor="pointer" size="H4">
        {props.news.title} 
        </Heading>
        </a>
        </Link>
        <Box px={{mb:"45px"}} py="18px">
        <Image border="1px solid black" src={props.news.image}  filter="grayscale(100%)" alt=""></Image>
        </Box>
        <Heading size="H7" mt="7px">{newsDate.replace(',','th,')}</Heading>


        <Box 
        my="20px"
        w={{base:"100%",mb:"550px"}}
        textAlign="justify"
        sx={{
            columnCount: { base: "1", mb: "2"},
            columnGap: "30px",   
        }}
        >

        <Text  size="p">
        {props.news.description} 
        </Text>
        <Flex justifyContent="flex-end" pt="15px" alignItems="center">
        <Heading size="H7" mr="10px">{props.news.source.name}</Heading>

        <Image alignSelf="flex-end"  src={`https://logo.clearbit.com/${props.news.source.url.replace('https://','').replace('www.','')}?size=35&greyscale=true`} border="1px solid black" borderRadius="50%" filter="grayscale(100%)" alt=""></Image>
        </Flex>
        </Box>
      </Flex>



      <Flex h="100%" flexDir="column" w={{base:"90%",mb:"550px"}} mt="30px" d={{base:"none",mb:size === 1 ? "none" : "flex"}}>
      <Link href={props.news.url || ''} passHref>
        <a>
        <Heading cursor="pointer" size="H4">
        {props.news.title} 
        </Heading>
        </a>
        </Link>
        <Box  pt="18px"  float="right">

        </Box>
        <Box 
        mb="20px"
        w={{base:"100%",mb:"550px"}}
        textAlign="justify"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        // sx={{
        //     columnCount: { base: "1", ts: "2"},
        //     columnGap: "30px",   
        // }}
        >
                  <Image border="1px solid black" float={{mb:"right"}} w={{base:"90%",mb:"48%"}} ml={{mb:"28px"}} src={props.news.image}  filter="grayscale(100%)" alt=""></Image>
                  <Flex mt="-11px" mb="14px" alignItems={{mb:"center"}} justifyContent="space-between" >
                  <Heading size="H7" mt="7px">{newsDate.replace(',','th,')}</Heading>

                  </Flex>
        <Text  size="p">
        {props.news.description} 
        </Text>
        <Flex justifyContent="flex-end" pt="15px" alignItems="center">
        <Heading size="H7" mr="10px">{props.news.source.name}</Heading>
        <Image alignSelf="flex-end"  src={`https://logo.clearbit.com/${props.news.source.url.replace('https://','').replace('www.','')}?size=35&greyscale=true`} border="1px solid black" borderRadius="50%" filter="grayscale(100%)" alt=""></Image>
        </Flex>
        
        
       
        </Box>
        
      </Flex>


{/* <Flex flexDirection="column" w="190px" h="500px" border="1px solid black" boxShadow=" white 0px 0px 0px 2px,black 0px 0px 0px 4px;">
<Image  src={`https://logo.clearbit.com/${props.news.source.url.replace('https://','').replace('www.','')}?size=300&greyscale=true`} borderBottom="1px solid black" filter="grayscale(100%)" alt=""></Image>

pp

</Flex> */}




    </>
  );
}

export default Page;














// <Grid
// h="200px"
// w="550px"
// templateRows="repeat(2, 1fr)"
// templateColumns="550px 1fr"
// gap={4} 
// mb="900px"
// >
// {/* <Heading size="H2" w="150">
//         Woman spends to much time on Codepens despite advice; no plans to stop
//       </Heading> */}

// <GridItem colSpan={2} >
// <Heading size="H4">
// Amid Black Widow lawsuit, Disney boss defends its pandemic release strategy  </Heading>
// </GridItem>  


// <GridItem>
// <Box 
//       my="20px"
//       // w="50%"
//       // sx={{
//       //     columnCount: { base: "1", ts: "2"},
//       //     columnGap: "30px",   
//       // }}
//       textAlign="justify"
//       >
//       <Text  size="p">
//       Following a high-stakes lawsuit over Disney’s day-and-date release of Marvel’s Black Widow on its Premier Access streaming platform and the company’s compensation of the film’s star Scarlett Johansson, Bob Chapek defended both the company’s payouts to talent as well as its decisions around its various pandemic movie releases.
      
//       </Text>
    
//       </Box>
// </GridItem>

// <GridItem>
// <Image src="https://image.cnbcfm.com/api/v1/image/106410802-1582723392778bob.jpg?v=1613080332" filter="grayscale(100%)" alt=""></Image>

// </GridItem>
// </Grid>
