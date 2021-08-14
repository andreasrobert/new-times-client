import { Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <Flex h="60px" my="70px" borderY="2px solid black" py="3px">
        <Flex
          h="100%"
          w="100%"
          borderY="1px solid black"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="https://codepen.io/oliviale/pen/BaoXOOP" passHref>
            <a>
              <Flex alignItems="center">
                <Heading size="H5" ml="20px" d={{ ts: "inline" }}>
                  inspired by:
                </Heading>
                <Image ml="10px" src="/codepen.svg" alt=""></Image>
              </Flex>
            </a>
          </Link>

          <Heading size="H5" mr="20px" d={{ ts: "inline" }}>
            PAGE 1
          </Heading>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
