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


function Guardian() {
    const [data,setData] = useState([])

  console.log(data)
  useEffect(() => {
      const getNyt = async() => {
        const res = await fetch(`https://content.guardianapis.com/search?q=movie&api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`)
        const result = await res.json();
        setData(result.response.results);
      }
      getNyt();

  }, [])


  return (
    <>
              <Heading mt="40px" mb="-20px" size="H8">THE GUARDIAN</Heading>

    
    
    { data.map((data:any)=>{
     return (
        <Flex key={data.id} borderTop="1px solid black" mt="30px" w="190px" px="10px">
        <Heading cursor="pointer" size="H8" textAlign="center" mt="7px">{data.webTitle}</Heading>
        </Flex>
        )
   })}




    </>
  );
}

export default Guardian;












