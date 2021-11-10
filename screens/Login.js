import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// formik
import { Formik } from 'formik';

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
  Colors,
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MessageBox,
  Line
} from '../components/styles';

//colors
const { neutral, secondary } = Colors;

export default function Login() {
    const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        {/* <PageLogo resizeMode="cover" source={require('../assets/SplashScreen.png')} /> */}
        <PageTitle>Log In to Your Mentor Account</PageTitle>
        <Formik
          initialValues={{ email: ``, password: `` }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="example@example.com"
                placeholderTextColor={neutral}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*************"
                placeholderTextColor={neutral}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secreTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              
              <MessageBox>...</MessageBox>
              
              <StyledButton onPress={handleSubmit}>
                  <ButtonText>
                      Login
                  </ButtonText>
              </StyledButton>
              <Line />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({ label, icon,isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={secondary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
      <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye' } size={30} color={secondary}/>
      </RightIcon>)}
    </View>
  );
};
