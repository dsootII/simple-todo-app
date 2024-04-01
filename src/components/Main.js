import React from 'react'
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TodoForm from './TodoForm'

export default function Main() {

    return(
        <Container>
            <p>This is the Main</p>
            <Tabs isFitted>
                <TabList>
                    <Tab>Create Todo</Tab>
                    <Tab>View Todos</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TodoForm />
                    </TabPanel>
                    <TabPanel>
                        View all todos here. 
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    ) 
    
}