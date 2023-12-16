import useLoginModel from '@/hooks/useLoginModel'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Model from '../Model'
import useRegisterModel from '@/hooks/useRegisterModel'

const LoginModel = () => {
    const loginmodel = useLoginModel()
    const registermodel = useRegisterModel()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggel = useCallback(() => {
        if (isLoading) {
            return
        }

        registermodel.onOpen() 
        loginmodel.onClose()
    }, [loginmodel, registermodel, isLoading])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // /todo stuff here

            loginmodel.onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [loginmodel])

    const bodyContent = (
        <div className='flex flex-col gap-4 mb-4'>
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disable={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disable={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>don't have any account?</p>
            <span onClick={onToggel} className='text-white cursor-pointer hover:underline'>
                register
            </span>
        </div>
    )
    return (
        <Model disable={isLoading} isOpen={loginmodel.isOpen}
            title='Login' actionlabel='Sign in' onClose={loginmodel.onClose}
            onSubmit={onSubmit} body={bodyContent} footer={footerContent}/>
    )
}
export default LoginModel