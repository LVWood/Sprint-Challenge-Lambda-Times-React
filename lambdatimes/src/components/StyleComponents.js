import React from 'react';
import styled from 'styled-components';

  const TopBarComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
    `;
    

const TopContainerComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    
    @media (min-width: 1280px) {
    .top-bar .container {
    width: 1280px;
        }
    }
    `;

const TopContainerLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    `;

const LeftSpan = styled.div`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
    `;

const TopContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    `;

const CenterSpan = styled.div`
    cursor: pointer;
    margin-right: 5%;
    :hover {
        text-decoration: underline;
    }
    `;

const TopContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    `;

const RightSpan = styled.div`
    cursor: pointer;
    `;

const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
    }
    @media (min-width: 1280px) {
    .header {
    width: 1280px;
    }
    `;

const DateComponent = styled.div`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;
    `;

const TempComponent = styled.div`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: right;
    margin-right: 25px;
    flex: 1;
    `;

const TitleComponent = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
    `;

export { 
    TopBarComponent, 
    TopContainerComponent, 
    TopContainerLeft, 
    TopContainerCenter, 
    TopContainerRight, 
    LeftSpan, 
    RightSpan, 
    CenterSpan, 
    HeaderComponent, 
    DateComponent, 
    TempComponent,
    TitleComponent }
