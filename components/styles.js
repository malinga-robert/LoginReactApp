import styled from 'styled-components'
import {View, Text, Image }  from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: '#800020',
      secondary: '#4D4D4D',
      neutral: '#79758F',
      background: '#FFFFFF'
}

const {primary, secondary, neutral} = Colors;

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
    text-align: center;
    font-weight: bold;
    color: ${neutral};
    padding: 10px;
`;