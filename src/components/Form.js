import React from 'react';
import { useForm } from 'react-hook-form';

import bgImg from '../assets/img1.jpg';

const Form = () => {

  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h3>Sign In</h3>
          <span>Register and enjoy the service</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('username', { maxLength: 12, required: true})} placeholder='username' />
            {errors.username?.type === 'maxLength' && 'username length exceed!'}
            {errors.username?.type === 'required' && 'username required!'}
            <input type="password" {...register('password')} placeholder='password' />
            <input type="password" {...register('cpassword')}placeholder='cofirm password' />
            <input type="text" {...register('mob', {required: true, minLength: 11, maxLength: 11})} placeholder='mobile number' />
            {errors.mob?.type === 'required' && 'Mobile number is required!'}
            {errors.mob?.type === 'minLength' && 'please provide required length!!'}
            {errors.mob?.type === 'maxLength' && 'Mobile length exceed!'}

            <button className='btn'>Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="wallpaper" />
        </div>
      </div>
    </section>
  );
}

export default Form;
