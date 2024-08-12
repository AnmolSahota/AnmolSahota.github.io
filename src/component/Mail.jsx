import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Mail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();
  function handleSubmit(event) {
    event.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .sendForm(
        "service_ja6tgeu",
        "template_nf9f80e",
        event.target,
        "H5H1eC8QqD0pxcjKj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message sent",
            description: "Your message has been sent successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setName("");
          setEmail("");
          setMessage("");
          // Show success message or redirect to thank you page
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error",
            description:
              "Something went wrong while sending your message. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  }

  return (
    <WrapItem>
      <Box bg="transparent" border={"2px solid #01642F "} borderRadius="lg">
        <Box m={8} color="#white">
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#01642F">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="#01642F" />}
                  />
                  <Input
                    type="text"
                    size="md"
                    _hover={{ bordercolor: "#01642F" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="to_name"
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <InputGroup borderColor="#01642F">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="#01642F" />}
                  />
                  <Input
                    type="email"
                    size="md"
                    _hover={{ bordercolor: "#01642F" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="from_name"
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  borderColor="#01642F"
                  _hover={{
                    borderRadius: "#01642F",
                  }}
                  placeholder="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  required
                />
              </FormControl>
              <FormControl id="submit" float="right">
                <Button
                  type="submit"
                  variant="solid"
                  bg="#01642F"
                  color="white"
                  _hover={{}}
                >
                  Send Message
                </Button>
              </FormControl>
            </VStack>
          </form>
        </Box>
      </Box>
    </WrapItem>
  );
}

export default Mail;
