import { Flex, Spinner, Text, VStack } from "@chakra-ui/react";

import { useEffect, useRef } from "react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = ({ isOpen }) => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const suggestedContainerRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      suggestedContainerRef.current.scrollTop =
        suggestedContainerRef.current.scrollHeight;
    };
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [isOpen]);
  if (isLoading) {
    <Spinner size="xl" />;
  }
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "blue.500" }}
            cursor={"pointer"}>
            See All
          </Text>
        </Flex>
      )}
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"full"}
        pb={6}
        mb={4}
        gap={4}
        flexDir={"column"}
        maxH={"250px"}
        overflowY={"auto"}
        overflow={"auto"}
        pr={4}
        ref={suggestedContainerRef}>
        {suggestedUsers.map((user) => (
          <SuggestedUser user={user} key={user.id} />
        ))}
      </Flex>
      {/* <Button
        // bg={"white"}
        // color={"black"}
        _hover={{ bg: "whiteAlpha.800", color: "black" }}
        size={{ base: "xs", md: "sm" }}
        onClick={onOpen}
        variant={"outline"}>
        About{isOpen && <AboutPage isOpen={isOpen} onClose={onClose} />}
      </Button> */}
    </VStack>
  );
};

export default SuggestedUsers;
