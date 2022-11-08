import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
// Settings for the slider
const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 250,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const cards = [
    {
      title: 'Design Projects 1',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Design Projects 2',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: 'Design Projects 3',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
  ];

export default function Hero (){
return(
<div>
<Box
position={'relative'}
height={'450px'}
width={'full'}
overflow={'hidden'}>
{/* CSS files for react-slick */}
<link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>

<Slider {...settings} >
  {cards.map((card, index) => (
    <Box
      key={index}
      height="400px"
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${card.image})`}>
      {/* This is the block you need to change, to customize the caption */}
      <Container size="container.lg" height="400px" position="relative">
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
          position="absolute"
          top="50%"
          left={{ base: '1rem', md: '-4rem', lg: '-21rem' }}
          transform="translate(0, -50%)">
          <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
            {card.title}
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'lg' }} color="GrayText">
            {card.text}
          </Text>
        </Stack>
      </Container>
    </Box>
  ))}
</Slider>
</Box>
</div>
  )
}