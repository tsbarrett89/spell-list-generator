import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../actions/authActions';

const UserLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)

        dispatchEvent(loginUser(data))
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
            <button type="submit" />
        </form>
    )
}

export default UserLogin