import {
  BoxProps,
  useColorModeValue,
  Box,
  Flex,
  CloseButton,
  Text,
  Icon,
  HStack,
  FlexProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsFillBoxFill, BsFillCartFill } from "react-icons/bs";
import { FiHome, FiTrendingUp, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const LINK_ITEMS = [
  { name: "Inicio", icon: FiHome, url: "/home" },
  { name: "Productos", icon: BsFillBoxFill, url: "/productos" },
  { name: "Ventas", icon: FiTrendingUp, url: "/ventas" },
  { name: "Compras", icon: BsFillCartFill, url: "/compras" },
  { name: "Ajustes", icon: FiSettings, url: "/config" },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string | undefined;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "black",
        color: "white",
      }}
      {...rest}
    >
      {icon && <Icon mr="4" fontSize="16" as={icon} />}
      {children}
    </Flex>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export function SidebarContent({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <HStack h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </HStack>
      {LINK_ITEMS.map((link) => (
        <Link key={link.name} to={link.url}>
          <NavItem icon={link.icon}>{link.name}</NavItem>
        </Link>
      ))}
    </Box>
  );
}
