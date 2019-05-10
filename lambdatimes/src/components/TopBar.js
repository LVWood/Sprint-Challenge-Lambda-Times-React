import React from 'react';
import styled from 'styled-components';
import { TopBarComponent, TopContainerComponent, TopContainerLeft, TopContainerCenter, TopContainerRight, LeftSpan, RightSpan, CenterSpan } from './StyleComponents'




// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarComponent>
      <TopContainerComponent>
        <TopContainerLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </TopContainerLeft>
        <TopContainerCenter>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </TopContainerCenter>
        <TopContainerRight>
          <RightSpan>LOG IN</RightSpan>
        </TopContainerRight>
      </TopContainerComponent>
    </TopBarComponent>
  )
}

//WOW that was a lot of work without much payoff!! I think I like my vanilla css! ;)

export default TopBar;