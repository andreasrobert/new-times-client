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


function Guardian(props:{searching:boolean;search:string}) {
    const [data,setData] = useState([])
    const [home, setHome] =useState(true)


  console.log(data)
  useEffect(() => {
      const getGuardian = async() => {
        const res = await fetch(`https://content.guardianapis.com/world/indonesia?api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`)
        const result = await res.json();
        setData(result.response.results);
        setHome(true)
      }

      const searchGuardian = async(search:string) =>{
        const res = await fetch(`https://content.guardianapis.com/search?q=${search}&api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`)
        const result = await res.json();
        setData(result.response.results);
        setHome(false)
      }

      if(props.searching){
        searchGuardian(props.search);
      }else{
        getGuardian();
      }

  }, [props.searching, props.search])


  return (
    <>
              <Heading mt="40px" mb="-20px" size="H8">THE GUARDIAN</Heading>

    
    
    { data.map((data:any)=>{
     return (
        <Flex key={data.id} borderTop="1px solid black" mt="30px" w="190px" px="10px">
            <Link href={data.webUrl} passHref>
            <a>
        <Heading cursor="pointer" size="H8" textAlign="center" mt="7px">{data.webTitle}</Heading>
        </a>
        </Link>
        </Flex>
        )
   })}




    </>
  );
}

export default Guardian;












