import Head from "next/head";
import Header from "../components/header";
import { Container, Flex } from "@chakra-ui/react";
import Page from "../components/page";
import { createContext } from "react";
import Crypto from "../components/crypto";
import Nyt from "../components/nyt";
import Guardian from "../components/guardian";
import Footer from "../components/footer";
import useNewsAPI from "../hooks/useGnews";

export const SearchContext = createContext({} as any);

export default function Home() {
  const { data, search, searching, handleSubmit } = useNewsAPI();

  return (
    <Container minW="100%" pos="absolute" px={{ mb: "40px" }}>
      <Head>
        <title>The Olden Times</title>
        <meta name="title" property="og:title" content="The Olden Times" />
        <meta property="og:type" content="Website" />
        <meta
          name="description"
          property="og:description"
          content="The Olden Times is a newspaper website with an actual newspaper look"
        />
        <meta name="author" content="Robert Pitoy" />
      </Head>
      <SearchContext.Provider value={{ search, searching }}>
        <Header handleSubmit={handleSubmit}></Header>
        <Flex flexDir={{ base: "column", tb: "row" }} justifyContent="center">
          <Flex
            flexDir="column"
            alignItems="center"
            mt="40px"
            pr={{ tb: "30px" }}
            borderRight={{ tb: "1px solid black" }}
          >
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              mt="-40px"
            >
              {data.map((news: any) => {
                return <Page key={news.url} news={news}></Page>;
              })}
            </Flex>
          </Flex>
          <Flex
            flexDir={{ tb: "column" }}
            justifyContent="space-between"
            alignItems="center"
            mt="44px"
            ml={{ tb: "30px" }}
            px={{ base: "15px", mb: "none" }}
            flexWrap="wrap"
          >
            <Crypto />
            <Nyt />
            <Guardian />
          </Flex>
        </Flex>
        <Footer />
      </SearchContext.Provider>
    </Container>
  );
}
