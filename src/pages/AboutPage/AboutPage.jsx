import {
  Box,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const AboutPage = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal motionPreset="slideInLeft" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Hi User Hope you liked post!!, please take your time to explore, I
            know this is not a complete version but, it is great..
            <Flex
              mb={4}
              gap={4}
              flexDir={"column"}
              maxH={"250px"}
              overflowY={"auto"}>
              <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                Built in 2024 check out my Profile {""}
                <Link
                  href="https://github.com/revenger77025"
                  target="_blank"
                  color="blue.500"
                  fontSize={14}
                  style={{ textDecoration: "none" }}>
                  GitHub
                </Link>
              </Box>
              <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                Check out my Portfolio {""}
                <Link
                  href="https://balaji21.vercel.app/"
                  target="_blank"
                  color="blue.500"
                  fontSize={14}
                  style={{ textDecoration: "none" }}>
                  Portfolio
                </Link>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutPage;
