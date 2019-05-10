import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }
/*  @Megan, I've got about 20 minutes left on the challenge and I'm back to where I always end up: 
data rendered and everything showing up where it should and me with no ideas on how to write the methods. :(  
  For the last hour or so, I've been looking up documentation, re-reading TK, looking at my past project and other people's blogs 
  for ideas and I've got nothing. (I worked on methods for a while, went ahead and finished the styling tasks 
  rather than waste any more time, then came back to it) I could keep tinkering and potentially mess up even more, or I could just call
  the game. I do feel like I understand how React works and I get the concepts of building components, 
  passing around state and props, and thinking in smaller chunks, so I don't honestly know what good repeating
  the week will do for me. Now if I could repeat a week on intensive JS and get some deeper help with reconfiguring 
  my brain to understand and wrap my mind around the logic behind js, that would be worth a lot. Because it's not
  the syntax that trips me up, I get the syntactical features of JS, I understand the different data types and 
  the wider concepts. What I don't get and what I fear I will never have, is the puzzle-solving gene that enables
  people come up with the logic that turns code into a machine that actually does stuff. For me, it might as well be magic.
*/

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    
    const selectedTab = this.state.selected
      return 
      this.setState({
        tabs: this.state.tab
      })
    }  
  };

  filterCards = () => {
    if (this.state.selected !== 'all') {
      return this.state.cards.filter()
    } else {
      return this.state.cards;
    }
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.selectedTab} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
