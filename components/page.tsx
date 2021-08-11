import { Flex, Heading, Text, GridItem, Grid, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
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

function Page() {
  return (
    <>
      <Flex h="100%" flexDir="column" w="70vw">
        <Heading size="H2">
          Woman spends to much time on Codepens despite advice; no plans to stop
        </Heading>
        <Box 
        my="20px"
        w="50%"
        textAlign="justify"
        sx={{
            columnCount: { base: "1", ts: "2"},
            columnGap: "30px",   
        }}
        >
        <Text  size="p">
        Sometimes, Internet users land themselves in an uncommon situation where an app or website can be used for both work and personal situations. Well, a young front-end designer was spending up to 13 hours on the site, Codepen for work and her hobby, which unfortunately, is also coding.
          time.
        </Text>
        <Text mt="20px" size="p">
        The designer, whose work includes a To-Do Terrarium, clarified, Well, I didnt have to use it for work but it was already part of my workflow. It just made sense as it was more efficient. The biggest issue, she said, is that she would hop on Codepen for work, but would get distracted by pens made by others in the community for unexpectedly long periods of time, which then causes her to spend even more time on the site.
        </Text>
        <Text mt="20px" size="p">
        I mean, thats terrible right? she asked. Codepen, which brands itself as the best place to build, test, and discover front-end code, has declined to comment at this time.
        </Text>
        </Box>
      </Flex>



      <Grid
  h="200px"
  w="70vw"
  templateRows="repeat(2, 1fr)"
  gap={4} 
  mb="200px"
>
  <Heading size="H2" w="150">
          Woman spends to much time on Codepens despite advice; no plans to stop
        </Heading>
  <GridItem border="1px solid black">
  <Box 
        my="20px"
        w="50%"
        sx={{
            columnCount: { base: "1", ts: "2"},
            columnGap: "30px",   
        }}
        textAlign="justify"
        >
        <Text  size="p">
        Sometimes, Internet users land themselves in an uncommon situation where an app or website can be used for both work and personal situations. Well, a young front-end designer was spending up to 13 hours on the site, Codepen for work and her hobby, which unfortunately, is also coding.
          time.
        </Text>
        <Text mt="5px" size="p">
        The designer, whose work includes a To-Do Terrarium, clarified, Well, I didnt have to use it for work but it was already part of my workflow. It just made sense as it was more efficient. The biggest issue, she said, is that she would hop on Codepen for work, but would get distracted by pens made by others in the community for unexpectedly long periods of time, which then causes her to spend even more time on the site.
        </Text>
        <Text mt="5px" size="p">
        I mean, thats terrible right? she asked. Codepen, which brands itself as the best place to build, test, and discover front-end code, has declined to comment at this time.
        </Text>
        </Box>
  </GridItem>
</Grid>



    </>
  );
}

export default Page;
