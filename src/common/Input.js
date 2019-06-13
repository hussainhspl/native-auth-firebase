import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {inputStyle, labelStyle, containerStyle, placeholderTextColor} = styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}> {label} </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder= {placeholder}
                placeholderTextColor = {placeholderTextColor}
                autoCorrect= {false}
                style={inputStyle}
                value= {value}
                onChangeText= {onChangeText}
                
            />
        </View>
    )
}

const styles = {
    inputStyle : {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        fontSize: 18,
        flex: 3
    },
    labelStyle : {
        flex: 1,
        paddingLeft: 20,
        fontSize: 18, 
    },
    containerStyle :{
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center'
    }

}

export { Input };