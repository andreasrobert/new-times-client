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


function Crypto() {
    const [data,setData] = useState([])

  // console.log(data)
  useEffect(() => {
      const getCrypto = async() => {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d`)
        const result = await res.json();
        setData(result);
      }
      getCrypto();

  }, [])


  return (
    <>
     


<Flex flexDirection="column" w="190px" h="500px" p="5px" border="1px solid black" boxShadow=" white 0px 0px 0px 2px,black 0px 0px 0px 4px;">
<Flex justifyContent="flex-end">
  <Heading size="H7"mr="25px">24h</Heading>
  <Heading size="H7" mr="7px">7d</Heading>
</Flex>
{ data.map((data:any)=>{
     return (
      <Flex mt="15px" key={data.id} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
        <Image src={data.image} alt="" w="30px" mr="15px"></Image>
        <Heading size="H7">{data.symbol.toUpperCase()}</Heading>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end">
        <Heading size="H7">{`${data.price_change_percentage_24h.toFixed(1)}%`}</Heading>
        <Flex w="47px" justifyContent="flex-end">
        <Heading size="H7">{`${data.price_change_percentage_7d_in_currency.toFixed(1)}%`}</Heading>
        </Flex>
        </Flex>


      </Flex>

     )
   })}

</Flex>




    </>
  );
}

export default Crypto;














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
