import {
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Card,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface CardElementProps {
  title: string;
  desc: string;
  img: string;
  url: string;
}

function CardElement({ title, desc, img, url }: CardElementProps) {
  return (
    <Card maxW="22rem" margin="5" direction={{ base: "row", sm: "column" }}>
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <Stack mt="6" spacing="2">
          <Heading size="md" textAlign="center">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justify="center">
        <Link to={url}>
          <Button variant="outline" colorScheme="green">
            Ir
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardElement;
