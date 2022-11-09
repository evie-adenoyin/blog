import logo from '../public/10648693.jpg'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  textDecoration
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Links = ['Home', 'News', 'About', 'Login','Sign Up'];



const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.toLowerCase()==='home'? '/':children.toLowerCase()}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styleLogo = {
    borderRadius: "30px",
}
  const styleLogoTxt = {
    textDecoration: 'none'
}
  
  
  return (
    <>
    <Container maxW={'100%'}  bg={useColorModeValue('gray.200', 'gray.800')}>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Link style={styleLogoTxt} href='/'>
        
          {/* <Image 
              src={logo} 
              alt="" 
              srcset="" 
              width={40}
              height={40}
              style={styleLogo}
            /> */}
            <p>Swings</p>
           </Link>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
            <HStack
            
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
               
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
    </>
  );
}