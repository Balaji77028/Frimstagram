import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { NotificationsLogo } from "../../assets/constants";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import Notificationssuser from "../SuggestedUsers/Notificationssuser";

const Notifications = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  return (
    <>
      <Tooltip
        hasArrow
        label={"Notifications"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}>
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}>
          <NotificationsLogo />
          <Box display={{ base: "none", md: "block" }}>Suggestions</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Suggestions</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex
              mb={4}
              gap={4}
              flexDir={"column"}
              maxH={"250px"}
              overflowY={"auto"}
              ref={suggestedContainerRef}>
              {!isLoading && suggestedUsers.length === 0 && (
                <>
                  <Text fontSize={"md"} color={"red.400"} alignSelf={"center"}>
                    Look&apos;s like you have enough friends to see.
                  </Text>
                  <Text fontSize={"md"} color={"red.400"} alignSelf={"center"}>
                    Number of followers a User can have is only 10!!!
                  </Text>
                </>
              )}
              <Notificationssuser />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Notifications;
