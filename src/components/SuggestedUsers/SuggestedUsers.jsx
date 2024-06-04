import { Box, Flex, Link, Spinner, Text, VStack } from "@chakra-ui/react";

import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
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
      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        2024 Built by{" "}
        <Link
          href="https://github.com/revenger77025"
          target="_blank"
          color="blue.500"
          fontSize={14}
          style={{ textDecoration: "none" }}>
          Balaji
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
