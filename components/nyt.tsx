import {
  Flex,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";


function Nyt(props: { searching: boolean; search: string }) {
  const [data, setData] = useState([]);
  const [home, setHome] = useState(true);

  useEffect(() => {
    const getNyt = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dh4O0ayB8CQgCKHI1GT6GzXIs2UW7SYe`
      );
      const result = await res.json();
      setData(result.results);
      setHome(true);
    };

    const searchNyt = async (search: string) => {
      const res = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=dh4O0ayB8CQgCKHI1GT6GzXIs2UW7SYe`
      );
      const result = await res.json();
      setData(result.response.docs);
      setHome(false);
    };

    if (props.searching) {
      searchNyt(props.search);
    } else {
      getNyt();
    }
  }, [props.searching, props.search]);

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
