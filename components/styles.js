import styled from 'styled-components'
import {View, Text, Image, TextInput, TouchableOpacity }  from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: '#800020',
      secondary: '#4D4D4D',
      neutral: '#79758F',
      background: '#FFFFFF'
}

const {primary, secondary, neutral, background} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${background};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height:200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: left;
    font-weight: bold;
    color: ${primary};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${neutral}
`;

export const StyledFormArea = styled.View`
    width: 590%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${background};
    padding: 15px;
    padding-left: 55px;
    padding-right: 5px;
    font-size: 16px;
    border-bottom;
    height: 68px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${neutral}
`;

export const StyledInputLabel = styled.Text`
    color: ${neutral};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    front-size: 38px;
    position: abosolute;
    i-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    front-size: 38px;
    position: abosolute;
    i-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${primary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${background};
    font-size: 16px;
`;

export const MessageBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width; 100%;
    background-color: ${background};
    margin-vertical: 10px;
`;