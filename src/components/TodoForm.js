import React, { useRef } from 'react';
import { Container, Button, ButtonGroup, Input } from '@chakra-ui/react';
import { useState } from 'react';
import TodoList from './TodoList';

export default function TodoForm () {

    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const inputRef = useRef();

    function handleTodoAdd(e) {
        setTodoList(previous => [...previous, todoInput]);
        setTodoInput('');
        console.log(todoList);
        inputRef.current.focus();
    }

    return (
        <Container>
            <form>
                <p>create todo:</p>
                <Input 
                    ref={inputRef}
                    type='text' 
                    placeholder='type todo here' 
                    value={todoInput} 
                    onChange={(e)=>{setTodoInput(e.target.value)}}
                />
                <ButtonGroup padding={"10px"}>
                    <Button variant={"ghost"} onClick={handleTodoAdd}>Add another todo</Button>
                    <Button variant={"ghost"}>Submit list</Button>
                </ButtonGroup>
            </form>

            <Container>
                <TodoList todoList={todoList}/>
            </Container>

        </Container>
    );
}