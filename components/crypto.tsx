import { Flex, Heading, Text, GridItem, Grid, Box, Image, NumberIncrementStepper } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


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
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h%2C7d`)
        const result = await res.json();
        setData(result);
      }
      getCrypto();

  }, [])


  return (
    <>
     


<Flex flexDirection="column" w={{base:"100%",tb:"190px"}} h="500px" p="5px" border="1px solid black" boxShadow=" white 0px 0px 0px 2px,black 0px 0px 0px 4px;" >
<Flex justifyContent="flex-end">
  <Heading size="H7"mr="25px">24h</Heading>
  <Heading size="H7" mr="7px">7d</Heading>
</Flex>
{ data.map((data:any)=>{
     return (
      <Flex mt="15px" key={data.id} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
        <Image filter="grayscale(100%)" src={data.image} alt="" w="30px" mr="12px"></Image>
        <Heading size="H7">{data.symbol.toUpperCase()}</Heading>
        </Flex>
        
        <Flex alignItems="center" justifyContent="flex-end">
        <Heading size="H7">{`${data.price_change_percentage_24h.toFixed(1)}%`}</Heading>
        <Flex w="47px" justifyContent="flex-end">
        <Heading size="H7">{`${data.price_change_percentage_7d_in_currency.toFixed(1)}%`}</Heading>
        </Flex>
      <Flex ml="10px" w="70px" h="25px" d={{base:"inline",tb:"none"}} >
        <Sparklines data={data.sparkline_in_7d.price}  width={130} height={25}>
    <SparklinesLine color="black" style={{ fill: "none" }} />
    <SparklinesReferenceLine type="avg" />
    </Sparklines>
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






