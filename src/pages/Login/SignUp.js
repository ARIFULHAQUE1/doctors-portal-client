import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'
import { Link } from 'react-router-dom';
const SignUp = () => {
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();
      console.log(gUser)

      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword (auth);
          console.log(user)

          let signInError;

          if ( true || error || gError) {
             signInError = <p className='text-red-600'><small>{error?.message || gError?.message}</small></p>
          }

          if (loading || gLoading) {
            return <Loading></Loading>
          }
          const onSubmit = (data) => {
            createUserWithEmailAndPassword(data.email, data.password)
            console.log(data)
      }
      return (
            <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>


                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text">Name</span>

                                    </label>
                                    <input
                                          {...register("name", {
                                                required: {
                                                      value: true,
                                                      message: 'Name is required'
                                                },
                                               
                                          })}

                                          type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />

                                    <label class="label">
                                          {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                                          
                                    </label>
                              </div>
                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text">Email</span>

                                    </label>
                                    <input
                                          {...register("email", {
                                                required: {
                                                      value: true,
                                                      message: 'Email is required'
                                                },
                                                pattern: {
                                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                      message: 'Enter a Valid Email'
                                                }
                                          })}

                                          type="email" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />

                                    <label class="label">
                                          {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                          {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                    </label>
                              </div>
                              {/* password input */}
                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text">Password</span>

                                    </label>

                                    <input
                                          {...register("password", {
                                                required: {
                                                      value:true,
                                                      message: 'Password is required'
                                                },

                                                minLength: {
                                                      value: 6,
                                                      message: 'Password must be 6 character or longer'
                                                }
                                          })}

                                          type="password" placeholder="Enter Password" class="input input-bordered w-full max-w-xs"

                                    />


                                    <label class="label">
                                          {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                          {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                    </label>
                              </div>

                              <input className='btn text-white w-full' type="submit" value={'Sign Up'} />
                              { signInError}
                             
                        </form>
                        <p><small>Already have an Account ?<Link to="/login" className='text-secondary'>Login hare</Link> </small></p>
                        <div className='divider'>or</div>
                        <button onClick={() => signInWithGoogle()}
                              className='btn btn-outline '>
                              Continue With Google</button>
                  </div>
            </div>
      </div>
      );
};

export default SignUp;