import React, { Component } from 'react';
import { Text, View } from 'react-native';

const style = {
    ViewStyle: {
      justifyContent: 'center',
			alignItems: 'center',
			height: 60,
			backgroundColor: '#f8f8f8',
    },
    textStyle: {
			textTransform: 'capitalize',
			fontSize: 18,
    }
};
const Header = (props) => {
	const { ViewStyle, textStyle } = style;
	return (
			<View style={ViewStyle}>
			<Text style={textStyle}> {props.headerName} </Text>
			</View>
	);
}

export { Header }

