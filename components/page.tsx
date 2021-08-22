import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page(props: { news: any }) {
  const [size, setSize] = useState(1);

  const newsDate = new Date(props.news.publishedAt).toLocaleDateString(
    undefined,
    { year: "numeric", month: "long", day: "numeric" }
  );

  useEffect(() => {
    if (props.news.description.length < 150) {
      setSize(2);
    }
  }, [props.news.description.length]);

  return (
    <>
      <Flex
        h="100%"
        flexDir="column"
        w={{ base: "90%", mb: "550px" }}
        mt="30px"
        d={{ base: "flex", mb: size === 2 ? "none" : "flex" }}
      >
        <Link href={props.news.url || ""} passHref>
          <a>
            <Heading cursor="pointer" size="H4">
              {props.news.title}
            </Heading>
          </a>
        </Link>
        <Box px={{ mb: "45px" }} py="18px">
          <Image
            border="1px solid black"
            src={props.news.image}
            filter="grayscale(100%)"
            alt=""
          ></Image>
        </Box>
        <Heading size="H7" mt="7px">
          {newsDate.replace(",", "th,")}
        </Heading>

        <Box
          my="20px"
          w={{ base: "100%", mb: "550px" }}
          textAlign="justify"
          sx={{
            columnCount: { base: "1", mb: "2" },
            columnGap: "30px",
          }}
        >
          <Text size="p">{props.news.description}</Text>
          <Flex justifyContent="flex-end" pt="15px" alignItems="center">
            <Heading size="H7" mr="10px">
              {props.news.source.name}
            </Heading>

            <Image
              alignSelf="flex-end"
              src={`https://logo.clearbit.com/${props.news.source.url
                .replace("https://", "")
                .replace("www.", "")}?size=35&greyscale=true`}
              border="1px solid black"
              borderRadius="50%"
              filter="grayscale(100%)"
              alt=""
            ></Image>
          </Flex>
        </Box>
      </Flex>

      <Flex
        h="100%"
        flexDir="column"
        w={{ base: "90%", mb: "550px" }}
        mt="30px"
        d={{ base: "none", mb: size === 1 ? "none" : "flex" }}
      >
        <Link href={props.news.url || ""} passHref>
          <a>
            <Heading cursor="pointer" size="H4">
              {props.news.title}
            </Heading>
          </a>
        </Link>
        <Box pt="18px" float="right"></Box>
        <Box
          mb="20px"
          w={{ base: "100%", mb: "550px" }}
          textAlign="justify"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Image
            border="1px solid black"
            float={{ mb: "right" }}
            w={{ base: "90%", mb: "48%" }}
            ml={{ mb: "28px" }}
            src={props.news.image}
            filter="grayscale(100%)"
            alt=""
          ></Image>
          <Flex
            mt="-11px"
            mb="14px"
            alignItems={{ mb: "center" }}
            justifyContent="space-between"
          >
            <Heading size="H7" mt="7px">
              {newsDate.replace(",", "th,")}
            </Heading>
          </Flex>
          <Text size="p">{props.news.description}</Text>
          <Flex justifyContent="flex-end" pt="15px" alignItems="center">
            <Heading size="H7" mr="10px">
              {props.news.source.name}
            </Heading>
            <Image
              alignSelf="flex-end"
              src={`https://logo.clearbit.com/${props.news.source.url
                .replace("https://", "")
                .replace("www.", "")}?size=35&greyscale=true`}
              border="1px solid black"
              borderRadius="50%"
              filter="grayscale(100%)"
              alt=""
            ></Image>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Page;
