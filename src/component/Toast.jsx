import { Text, useToast } from "@chakra-ui/react";
import React from "react";

function Toast() {
  const toast = useToast();
  return (
    <Text
      onClick={() =>
        toast({
          title: "sucess",
          description: "Thanks for connecting.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Lets Connect
    </Text>
  );
}

export default Toast;
