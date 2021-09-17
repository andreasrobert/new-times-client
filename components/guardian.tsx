import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import useNewsAPI from "../hooks/useNewsAPI";

function Guardian() {
  const { data } = useNewsAPI({ source: "guardian" });

  return (
    <>
      <Heading
        mt="40px"
        mb="-20px"
        size="H8"
        w={{ base: "190px" }}
        textAlign="center"
        d={{ base: "none", tb: "inline" }}
      >
        THE GUARDIAN
      </Heading>

      {data.map((data: any) => {
        return (
          <Flex
            key={data.webUrl}
            py={{ base: "25px", tb: "0px" }}
            justifyContent="center"
            border={{ base: "1px solid black", tb: "0px" }}
            borderTop={{ tb: "1px solid black" }}
            mt="30px"
            w={{ base: "100%", ms: "200px", tb: "190px" }}
            px={{ base: "25px", tb: "10px" }}
          >
            <Link href={data.webUrl || ""} passHref>
              <a>
                <Heading cursor="pointer" size="H8" textAlign="center" mt="7px">
                  {data.webTitle}
                </Heading>
              </a>
            </Link>
          </Flex>
        );
      })}
    </>
  );
}

export default Guardian;
