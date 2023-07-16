import React from 'react'
import Signup from '../components/loginSignup/signup'
import RootLayout from '../layout'
import BaseLayout from '../components/BaseLayout/BaseLayout'

export default function SignUp() {
  return (
    <RootLayout>
      <BaseLayout>
        <Signup />
      </BaseLayout>
    </RootLayout>
  )
}
