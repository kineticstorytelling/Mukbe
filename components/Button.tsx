import React from 'react';
import { TouchableOpacity, View, Text, Touchable } from 'react-native';
import PropTypes from 'prop-types';



const CustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View>
            <Text>{children}</Text>
        </View>
    </TouchableOpacity>
  );
};


export default CustomButton