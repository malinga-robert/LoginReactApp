import React from 'react'
import { StatusBar } from 'expo-status-bar'; 
import { View } from 'react-native';

// formik
import { Formik } from 'formik';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from '../components/styles'


export default function Login() {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                {/* <PageLogo resizeMode="cover" source={require('../assets/SplashScreen.png')} /> */}
                <PageTitle>Log In to Your Mentor Account</PageTitle>
                <Formik initialValues={{email: ``, password: ``}} onSubmit={(values)=>{console.log(values)}}> 
                    {({handleChange, handleBlur, handleSubmit, values})=><StyledFormArea> </StyledFormArea> }
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({label, icon, ...props}) => {
    <View>
        
    </View>
}
