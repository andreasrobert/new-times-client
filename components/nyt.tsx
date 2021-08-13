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


function Nyt() {
    const [data,setData] = useState([])

  console.log(data)
  useEffect(() => {
      const getNyt = async() => {
        const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dh4O0ayB8CQgCKHI1GT6GzXIs2UW7SYe`)
        const result = await res.json();
        setData(result.results);
      }
      getNyt();

  }, [])


  return (
    <>
              <Heading mt="25px" mb="-20px" size="H8">NEW YORK TIMES</Heading>

    
    
    { data.map((data:any)=>{
     return (
        <Flex key={data.id} borderTop="1px solid black" mt="30px" w="190px" px="10px">
        <Heading cursor="pointer" size="H8" textAlign="center" mt="7px">{data.title}</Heading>
        </Flex>
        )
   })}




    </>
  );
}

export default Nyt;












