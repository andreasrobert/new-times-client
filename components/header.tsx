import { Flex, Heading, Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
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

function Header(props: { handleSubmit:  (value:string) => (event: FormEvent) => void; search: string }) {
  const [value, setValue] = useState("");

  return (
    <>
      <Flex
        h={{ tb: "170px" }}
        py={{ base: "20px", tb: "0px" }}
        justifyContent="center"
        alignItems="center"
      >
        {/* <H1>The Codepen Times</H1> */}
        <Heading size="H1">The Mouse Times</Heading>
      </Flex>
      <Flex h="60px" borderY="2px solid black" py="3px">
        <Flex
          h="100%"
          w="100%"
          borderY="1px solid black"
          justifyContent="space-around"
          alignItems="center"
        >
          <Heading size="H5" d={{ base: "none", ts: "inline" }}>
            ISSUE #1
          </Heading>
          {/* <Heading size="H5">TUESDAY, 24 MAY, 2020</Heading> */}
          <Heading size="H5" w={{ base: "151px", ts: "fit-content" }}>
            {new Date()
              .toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              .toUpperCase()}
          </Heading>
          <Flex alignItems="center">
            <form onSubmit={props.handleSubmit(value)}>
              <Input
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
                focusBorderColor="gray"
                borderRadius="3px"
                border="none"
                textTransform="uppercase"
                fontSize="20px"
                placeholder={`${props.search}`}
                fontFamily="EB Garamond"
                w="130px"
                mr={{ base: "-18px", ts: "4px" }}
                h="30px"
                bg="transparent"
              ></Input>
            </form>
            {/* <Heading size="H5">EDITION</Heading> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
