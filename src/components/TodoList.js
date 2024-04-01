import React from 'react';
import {
    Container,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
import { ChevronRightIcon, } from '@chakra-ui/icons';
// CheckCircleIcon

export default function TodoList(props) {

    return(
        <Container>
            <List spacing={3}>
            {props.todoList.map((todo, index) => {  
                return(              
                    <ListItem key={index}>
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        {todo}
                    </ListItem>
                );
            })}
            </List>
        </Container>
    );
}