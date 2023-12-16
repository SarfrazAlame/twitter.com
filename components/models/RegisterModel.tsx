import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Model from '../Model'
import useLoginModel from '@/hooks/useLoginModel'
import useRegisterModel from '@/hooks/useRegisterModel'

const RegisterModel = () => {
    const loginmodel = useLoginModel()
    const registemodel = useRegisterModel()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const onToggel = useCallback(() => {
        if (isLoading) {
            return;
        }

        registemodel.onClose()
        loginmodel.onOpen()
    }, [isLoading, registemodel, loginmodel])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // /todo  and register login here

            registemodel.onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [registemodel])

    const bodyContent = (
        <div className='flex flex-col gap-4 mb-4'>
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disable={isLoading}
            />
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disable={isLoading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
            <p>Already have an account?</p>
            <span onClick={onToggel} className='text-white cursor-pointer hover:underline'>
                Sign in
            </span>
        </div>
    )
    return (
        <Model disable={isLoading} isOpen={registemodel.isOpen}
            title='Create an account' actionlabel='Sign up' onClose={registemodel.onClose}
            onSubmit={onSubmit} body={bodyContent} footer={footerContent} />
    )
}
export default RegisterModel
