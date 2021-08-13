import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components'

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

function Test() {
  return (
    <>
      <Flex h="170px"  justifyContent="center" alignItems="center">
          {/* <H1>The Codepen Times</H1> */}
          <Heading size="H1">The Codepen Times</Heading>
      </Flex>
      <Flex h="60px"  borderY="2px solid black" py="3px" >
      <Flex h="100%" w="100%"  borderY="1px solid black" justifyContent="space-around" alignItems="center">
          <Heading size="H5">ISSUE #1</Heading>
          {/* <Heading size="H5">TUESDAY, 24 MAY, 2020</Heading> */}
          <Heading size="H5">{new Date().toLocaleDateString(undefined,{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).toUpperCase()}</Heading>
          <Heading size="H5">TWO MEMES EDITION</Heading>

      </Flex>
      </Flex>
    </>
  );
}

export default Test;
