import { Flex, Heading, Text, GridItem, Grid } from "@chakra-ui/react";
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
        <Text size="p">
          Sometimes, Internet users land themselves in an uncommon situation
          where an app or website can be used for both work and personal
          situations. Well, a young front-end designer was spending up to 13
          hours on the site, Codepen for work and her hobby, which
          unfortunately, is also coding. The designer, whose work includes a
          To-Do Terrarium, clarified, Well, I didnt have to use it for work but
          it was already part of my workflow. It just made sense as it was more
          efficient. The biggest issue, she said, is that she would hop on
          Codepen for work, but would get distracted by pens made by others in
          the community for unexpectedly long periods of time, which then causes
          her to spend even more time on the site. I mean, thats terrible right?
          she asked. Codepen, which brands itself as the best place to build,
          test, and discover front-end code, has declined to comment at this
          time.
        </Text>
      </Flex>

      <Grid
  h="200px"
  w="70vw"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(7, 1fr)"
  gap={4} 
  mb="200px"
>
  <GridItem colSpan={7} bg="tomato">
  <Heading size="H2">
          Woman spends to much time on Codepens despite advice; no plans to stop
        </Heading>
  </GridItem>
  <GridItem bg="papayawhip">
  <Text size="p">
          Sometimes, Internet users land themselves in an uncommon situation
          where an app or website can be used for both work and personal
          situations. Well, a young front-end designer was spending up to 13
          hours on the site, Codepen for work and her hobby, which
          unfortunately, is also coding. The designer, whose work includes a
          To-Do Terrarium, clarified, Well, I didnt have to use it for work but
          it was already part of my workflow. It just made sense as it was more
          efficient. The biggest issue, she said, is that she would hop on
          Codepen for work, but would get distracted by pens made by others in
          the community for unexpectedly long periods of time, which then causes
          her to spend even more time on the site. I mean, thats terrible right?
          she asked. Codepen, which brands itself as the best place to build,
          test, and discover front-end code, has declined to comment at this
          time.
        </Text>
  </GridItem>
  <GridItem colSpan={2} bg="papayawhip" />
</Grid>

    </>
  );
}

export default Page;
