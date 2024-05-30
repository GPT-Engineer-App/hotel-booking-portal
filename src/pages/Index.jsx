import { Container, VStack, Heading, FormControl, FormLabel, Input, Select, Button, HStack, Text, IconButton } from "@chakra-ui/react";
import { FaHotel, FaCalendarAlt, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <HStack spacing={4}>
          <FaHotel size="2em" />
          <Heading as="h1" size="2xl">
            Hotel Booking
          </Heading>
        </HStack>

        <VStack spacing={4} width="100%">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" />
          </FormControl>

          <FormControl id="checkin" isRequired>
            <FormLabel>Check-in Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl id="checkout" isRequired>
            <FormLabel>Check-out Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl id="roomType" isRequired>
            <FormLabel>Room Type</FormLabel>
            <Select placeholder="Select room type">
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </Select>
          </FormControl>

          <Button colorScheme="teal" size="lg" width="100%">
            Book Now
          </Button>
        </VStack>

        <HStack spacing={4} pt={10}>
          <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" />
          <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
        </HStack>

        <Text>&copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
