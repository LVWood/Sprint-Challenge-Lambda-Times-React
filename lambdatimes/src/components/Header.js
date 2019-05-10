import React from 'react';
import { HeaderComponent, DateComponent, TempComponent, TitleComponent } from './StyleComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

// const Header = () => {
//   return (
//     <div className="header">
//       <span className="date">SMARCH 32, 2018</span>
//       <h1>Lambda Times</h1>
//       <span className="temp">98°</span>
//     </div>
//   )
// }

const Header = () => {
  return (
    <HeaderComponent>
      <DateComponent>SMARCH 32, 2018</DateComponent>
      <TitleComponent>Lambda Times</TitleComponent>
      <DateComponent>98°</DateComponent>
    </HeaderComponent>
  )
}

export default Header