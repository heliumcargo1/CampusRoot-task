import {View, Text} from 'react-native';
import React, {useState} from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions'

import SwitchDesign from './SwitchDesign';
import OverView from './OverView';
import Application from './Application';

const HomePageSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <View style={{width:"100%",height:responsiveHeight(8),}}>
      <SwitchDesign
        selectionMode={1}
        option1="Overview"
        option2="Applications"
        
        onSelectSwitch={onSelectSwitch}
      />

      <View >
        {gamesTab == 1 && <OverView />}
        {gamesTab == 2 && <Application/>}
       
      </View>
    </View>
  );
};

export default HomePageSwitch;
