import React from 'react'

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from '../components/styles'

export default function Login() {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/SplashScreen.png')} />
                <PageTitle>Log In to Your Mentor Account</PageTitle>
            </InnerContainer>
        </StyledContainer>
    )
}
