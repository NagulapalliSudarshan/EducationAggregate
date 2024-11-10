import CommonForm from "@/components/common-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const AuthPage = () => {
  const [activeTab,setActiveTab] = useState('signin');
  const { signinFormData, setSignInFormData, signupFormData, setSignUpFormData,handleRegisterUser } = useContext(AuthContext)

  const handleTabChange = val => {
    setActiveTab(val)
  }

  const checkSignInValidity = () => {
    return signinFormData && signinFormData.userEmail!=="" && signinFormData.password!=="";
  }

  const checkSignUpValidity = () => {
    return signupFormData && signupFormData.userName.length > 4 && signupFormData.userEmail!=="" && signupFormData.password.length > 4 && signupFormData.userCourse!==""
  }

  return (
    <div className='flex flex-col min-h-screen'>
        <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
            <Link to={'/'} className='flex items-center justify-center'>
                <GraduationCap className='h-8 w-8 mr-4' />
                <span className="font-extrabold text-xl">KnowledgeBase</span>
            </Link>
        </header>
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Tabs value={activeTab} defaultValue='signin' onValueChange={handleTabChange} className='w-full max-w-md'>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value='signin'>
              <Card className="p-6 space-y-4">
                <CardHeader>
                  <CardTitle>Sign in to your account</CardTitle>
                  <CardDescription>Enter Email and Password to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <CommonForm 
                    formControls={signInFormControls}
                    buttonText="Sign In"
                    formData={signinFormData}
                    setFormData={setSignInFormData}
                    isButtonDisabled={!checkSignInValidity()}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='signup'>
            <Card className="p-6 space-y-4">
                <CardHeader>
                  <CardTitle>Create a new account</CardTitle>
                  <CardDescription>Enter details to </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <CommonForm 
                    formControls={signUpFormControls}
                    buttonText="Sign Up"
                    formData={signupFormData}
                    setFormData={setSignUpFormData}
                    isButtonDisabled={!checkSignUpValidity()}
                    handleSubmit={handleRegisterUser}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
    </div>
  )
}

export default AuthPage
