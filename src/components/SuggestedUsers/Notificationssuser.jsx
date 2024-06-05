import { Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import SuggestedUser from "./SuggestedUser";

const Notificationssuser = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  if (isLoading) {
    <Spinner size="xl" />;
  }
  return (
    <VStack py={8} px={6} gap={4}>
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
      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}
    </VStack>
  );
};

export default Notificationssuser;
