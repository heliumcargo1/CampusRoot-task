import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const SwitchDesign = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)}>
          <View
            style={{
              width: responsiveWidth(45),
              height: '100%',
              backgroundColor:
                getSelectionMode == 1 ? colors.secondary : colors.primary,
              justifyContent: 'center',
              borderRadius:40,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.text,
                fontSize: 18,
              }}>
              {option1}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <View
            style={{
              width: responsiveWidth(45),
              height: '100%',
              backgroundColor:
                getSelectionMode == 2 ? colors.secondary : colors.primary,
                borderRadius:40,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color:colors.text,
                fontSize: 18,
              }}>
              {option2}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwitchDesign;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: "blue",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  labelContainer: {
    width: '95%',
    height: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: "red",
  },
});
