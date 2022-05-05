import React from 'react';
import { useForm } from 'react-hook-form';

const UserLogin = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <input {...register("password")} />
            <button type="submit" />
        </form>
    )
}

export default UserLogin