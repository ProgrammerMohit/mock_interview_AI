import React from 'react'
import AuthForm from '@/components/AuthForm'
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
const page = async() => {
  const isUserAuthenticated = await isAuthenticated();
  if(isUserAuthenticated) {
    redirect("/");
  }
  return (
    <AuthForm type= "sign-in"/>
  )
}

export default page
