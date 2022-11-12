import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
} from '@chakra-ui/react';
import NewsListNav from './newsListNav';
import logo from '../public/10648693.jpg'

const NewsList = ({header, data})=>{
    console.log("data: ", data);
    console.log("Header: ", header);
    const style ={
        textDecoration:'none'
    }
    return (
       
  
        <div style={style}>
            <Container maxW={'7xl'}>
            <Heading as="h2" marginTop={{base:'5', sm:'20'}}>{header}</Heading>
            <NewsListNav />
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5" marginBottom="20"> 
            {data.map(data=>
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                <Box w="100%">
                
                    <Box borderRadius="lg" overflow="hidden">
                   <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={`newsdetail/${data.id}`} >
                    <Image
                        transform="scale(1.0)"
                        src={
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)',
                        }}
                        />
                     </Link>
                     </Box>
                    {/* <BlogTags tags={['Engineering', 'Product']} marginTop="3" /> */}
                    <Heading fontSize="xl" marginTop="2">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={`newsdetail/${data.id}`} >
                        {data.title}
                    </Link>
                    </Heading>
                    <Link style={style} href={`newsdetail/${data.id}`} >
                    <Text as="p" fontSize="md" marginTop="2">{data.body}</Text>
                    </Link>
                    {/* <BlogAuthor
                    name="John Doe"
                    date={new Date('2021-04-06T19:01:27Z')}
                    />  */}
                </Box>
            </WrapItem>
            )}
            </Wrap>
            </Container>
        </div>
    )
}

export default NewsList