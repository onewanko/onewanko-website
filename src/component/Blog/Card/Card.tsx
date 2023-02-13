import React from 'react';
import {
  Heading,
  Image,
  Text,
  Box,
  Stack,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react';
import data from "../../../../data/blog.json";


export default function Card() {
  return (
    <>
      {data.map(({ tag, title, description, author, date }) => (
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          key={title}
        >
          <Box
            h={'210px'}
            bg={'gray.100'} 
            mt={-6}
            mx={-6}
            mb={9}
            pos={'relative'}
          >
            <Image
              src={
                '/blog/what_.png'
              }
              alt="image"
              h={230}
              w={370}
            />
          </Box>
          <Stack>
            <Text
              color={'blue.400'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {tag}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {title}
            </Heading>
            <Text color={'gray.500'}>
              {description}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600} color={'gray.800'}>{author}</Text>
              <Text color={'gray.500'}>{date}</Text>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
}
