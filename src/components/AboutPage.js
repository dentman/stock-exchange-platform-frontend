import React from 'react';
import styled from 'styled-components';

export default function AboutPage() {
    return (
        <AboutContainer>
            <h2>Overview</h2>
            <p>The app is a news site for stock market news that also allows you to simulate trading. </p>
            <p> Note that historical prices shown on diagrams are valid data retrieved from the IEXCloud API. <i>Intraday changes in stock prices are, however, simulated!</i></p>
            <p>Created by Ádám Györe and Fruzsina Elekes.</p>

            <h2>Main features</h2>
            <h3>1. News</h3>
            <p><strong>Home:</strong> Access a certain stock's detailed page by looking for it in the search bar!</p>
            <p><strong>Detailed View:</strong> The detailed view contains information on the stock's price at previous market close, current price (simulated!), market cap, 52 week range, average volume, year to date change, and last trade time. There is also a graph showing stock prices for the last 30 days. Below, there are news related to the stock: a short video and excerpts from various articles from the last days.</p>
            <p><strong>Favourites: </strong>You can add stocks to the favourites, so you can have a quick overview of your favourite stocks' main statistics or easily access their detailed page. This feature does not require being a registered user of the site, but the content of your Favourites page will be limited to the browser you are using.</p>
            <h3>2. Trading</h3>
            <p>To be able to simulate trading you need to register to the site and log in. Upon registration you will receive a mock account with 10 000 USD.</p>
            <p><strong>Trade:</strong> You can buy or sell stock on the Trade page by specifying the symbol, the action (buy/sell), the amount and the limit price for the transaction. When clicking Trade, a confirmation dialog is shown with the details of the order you are about to place. The order is only finalized when confirming the placement. If, for some reason, the transaction could not be made (insufficient funds or owned stock, mismatch between current stock price and the limit price) a modal window will notify you about the error. Upon making a successful transaction, you will be redirected to the portfolio page.</p>
            <p><strong>Portfolio:</strong> On the Portfolio link you will find information about your account (username, current balance, and current total worth of your portfolio). Also, you will see the details of your portfolio, specifying the amount you own of each stock. Clicking on the History button, you can access the full transaction history for a given stock.</p>

        </AboutContainer>
    )
}


const AboutContainer = styled.div`
    max-width: 900px;
    margin: auto;
    line-height: 1.5em;
`