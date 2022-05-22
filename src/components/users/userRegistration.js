import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../actions/authActions';

const UserLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [passwordMatch, setPasswordMatch] = useState(false)
    const dispatch = useDispatch()

    const onSubmit = data => {
        console.log(data)
        const creds = { email: data.email, password: data.password }

        if(data.password_verification !== data.password){
            setPasswordMatch(true)
        } else {
            dispatch(registerUser(creds))
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            type="text"
                {...register("email", { required: {value: true, message: "Email is required."}, pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Valid email required." }})} 
            />
            {errors.email && errors.email.message}
            <input
                type="password"
                {...register("password", { required: true, minLength: 6, maxLength: 16 })}
            />
            {errors.password && <p>Password between 6 and 16 characters required.</p>}
            <input
                type="password"
                {...register("password_verification", 
                { required: { value: true, message: "Please verify password." },
                onChange: (e) => console.log()} )}
            />
            {errors.password_verification && errors.password_verification.message}
            {passwordMatch && <p>Passwords must match.</p>}
            <button type="submit" />
        </form>
    )
}

export default UserLogin