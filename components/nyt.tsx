import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import useNewsAPI from "../hooks/useNewsAPI";

function Nyt() {
  const { data, home } = useNewsAPI({ source: "nyt" });

  return (
    <>
      <Heading
        mt="25px"
        mb="-20px"
        size="H8"
        w="190px"
        textAlign="center"
        d={{ base: "none", tb: "inline" }}
      >
        NEW YORK TIMES
      </Heading>

      {data.map((data: any) => {
        return (
          <Flex
            key={home ? data.id : data._id}
            py={{ base: "25px", tb: "0px" }}
            justifyContent="center"
            border={{ base: "1px solid black", tb: "0px" }}
            borderTop={{ tb: "1px solid black" }}
            mt="30px"
            w={{ base: "100%", ms: "200px", tb: "190px" }}
            px={{ base: "25px", tb: "10px" }}
          >
            <Link href={home ? data.url || "" : data.web_url || ""} passHref>
              <a>
                <Heading
                  cursor="pointer"
                  size="H8"
                  textAlign="center"
                  mt={{ tb: "7px" }}
                >
                  {home ? data.title : data.snippet}
                </Heading>
              </a>
            </Link>
          </Flex>
        );
      })}
    </>
  );
}

export default Nyt;
