import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Guardian(props: { searching: boolean; search: string }) {
  const [data, setData] = useState([]);
  const [home, setHome] = useState(true);

  // console.log(data)
  useEffect(() => {
    const getGuardian = async () => {
      const res = await fetch(
        `https://content.guardianapis.com/world/indonesia?api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`
      );
      const result = await res.json();
      setData(result.response.results);
      setHome(true);
    };

    const searchGuardian = async (search: string) => {
      const res = await fetch(
        `https://content.guardianapis.com/search?q=${search}&api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`
      );
      const result = await res.json();
      setData(result.response.results);
      setHome(false);
    };

    if (props.searching) {
      searchGuardian(props.search);
    } else {
      getGuardian();
    }
  }, [props.searching, props.search]);

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
