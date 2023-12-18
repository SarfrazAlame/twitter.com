import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Model from '../Model'
import useLoginModel from '@/hooks/useLoginModel'
import useRegisterModel from '@/hooks/useRegisterModel'
import axios from 'axios'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'

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

            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            })

            toast.success('Account created')

            signIn('credentials',{
                email,
                password
            })

            registemodel.onClose()
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }, [registemodel, email, password, name, username])

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
