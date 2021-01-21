import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';


export function ListMain(props) {
    return (
        <ListContainer>
            <Center>
                <List>
                    {props.symbols.map(s => <ListItem key={props.symbols.indexOf(s)} symbol={s}></ListItem>)}
                </List>
            </Center>
        </ListContainer>
    )
}


const ListContainer = styled.div`
    display: block;
    width: 100%;
`

const Center = styled.div`
    margin: auto;
    width: fit-content;
`

const List = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    /* justify-content: space-evenly; */
    padding: 1em;

`