import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import Summary from './Summary';
import styled from 'styled-components';


export default function Portfolio() {
    let userId = process.env.REACT_APP_USER_ID;
    const [user, setUser] = useState(0)

    useEffect(()=>{
        fetch(`http://localhost:8080/user/${userId}`, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Access-Control-Allow-Origin' : 'http://localhost:8080/user'
                  }
            })
            .then(resp => resp.json())
            .then(data => setUser(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <PortfolioDiv>
            {user !== 0 ? <Summary user={user}></Summary> : "Loading"}
            {user !== 0 ? user.portfolio.map(s => <PortfolioItem 
                key={s.id} 
                item={s} 
                transactions={user.orders.filter(o => o.symbol === s.symbol && o.status === 'COMPLETED').map(o => o.stockTransaction)}></PortfolioItem>)
                : "Loading"}
        </PortfolioDiv>
    )
}


const PortfolioDiv = styled.div`
    margin: auto;
    width: 50%
`