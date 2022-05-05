import React from 'react';
import { useForm } from 'react-hook-form';

const UserLogin = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("email", { pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"})} 
            />
            <input
                type="password"
                {...register("password", { min: 6, max: 16 })}
            />
            <button type="submit" />
        </form>
    )
}

export default UserLogin