import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';

import logo from '../public/10648693.jpg'

export default function NewsDetail() {
  return (
    <Center py={6}>
     <Box
        maxW={'100%'}
        w={'100%'}
        bg={useColorModeValue('white', 'gray.900')}
        // boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
           <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> 
        <Box
          h={{base:'250px', sm:'600px'}}
          bg={'gray.100'}
          mt={2}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
                logo }
            layout={'fill'}
            // width='20px'
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}