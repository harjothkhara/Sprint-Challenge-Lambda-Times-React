import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsDiv = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }

`
const Topics = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

`

const TitleSpan = styled.span `
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsDiv>
      <Topics>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {props.tabs.map ( item => <Tab tab={item} key={item} selectTabHandler={props.selectTabHandler}
          selectedTab={props.selectedTab} /> )}
      </Topics>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Tabs;
