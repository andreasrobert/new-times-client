import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import { Container } from "@chakra-ui/react";
import Page from '../components/page';

export default function Home() {
  return (
   <Container minW="100%" pos="absolute" px="40px">

   <Header></Header>
   <Page></Page>

   </Container>
  )
}
