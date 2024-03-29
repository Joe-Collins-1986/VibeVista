import React from "react";
import ChatGptForm from "../components/ChatGptForm";
import { Stack, Heading, Flex, Box } from "@chakra-ui/react";
import { TfiThought } from "react-icons/tfi";

const Home = () => {
  return (
    <>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={{ base: "100%", lg: "50%" }}
        py={12}
        px={6}
      >
        <Flex direction="row" justify="center" align="center">
          <Box display={{ base: "none", md: "block" }}>
            <TfiThought fontSize="2em" />
          </Box>
          <Heading fontSize={"4xl"} px={10}>
            VibeVista
          </Heading>
          <Box display={{ base: "none", md: "block" }}>
            <TfiThought fontSize="2em" />
          </Box>
        </Flex>

        <ChatGptForm />
      </Stack>
    </>
  );
};

export default Home;
