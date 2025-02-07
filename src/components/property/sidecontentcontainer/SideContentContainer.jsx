'use client'
import { useForm } from 'react-hook-form'
import styles from './sidecontent.module.css'
import {Lato} from 'next/font/google'
import {TextField} from '@mui/material'
import Addbox from './Addbox'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700', '900']
})

function SideContentContainer(props) {

  const { register,handleSubmit,formState: { errors }} = useForm();

  const onSubmit = (data) =>{
    console.log(data);
    alert('Details registered, we will get to you soon!!!')
  }

  return (
    <div style={lato.style} className={styles.sideContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4> Looking for a Property in {props.title}</h4>
        <TextField
          fullWidth
          margin="dense"
          error = {errors.Name!==undefined}
          helperText = {errors.Name?.message}
          label = 'Name'
          size='small'
          {...register('Name',{required : 'Name is required',maxLength: {value:30,message: 'Max allowed length of Name is 30'}})}
        />
        <TextField
          fullWidth
          margin="dense"         
          error = {errors.Phone!==undefined}
          helperText = {errors.Phone?.message}
          label = 'Phone'
          size='small'
          {...register('Phone',{required:'Phone Number is required'})}
        />
        <TextField
          fullWidth
          margin="dense"
          error = {errors.Email!==undefined}
          helperText = {errors.Email?.message}
          label = 'Email'
          size='small'
          {...register('Email',{required:'Email is required',pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Enter a valid email'}})}
        />
        <TextField
          multiline
          fullWidth
          margin="dense"
          label = 'Comments(Optional)'
          rows={4}
          {...register('Comments')}
        />
        <div className={styles.formTermsCond}>
          <input type='checkbox' {...register('TermsConditions',{required:'You have to agree to terms and conditions before submitting'})}></input>
          <label> &nbsp;By submitting this form I agree to <a href='#termsofuse'>Terms of use</a></label>
        </div>
        <p style={{color:'red'}}>{errors.TermsConditions && errors.TermsConditions.message}</p>
        <button>Send Message</button>
      </form>
      <Addbox/>
    </div>
  )
}

export default SideContentContainer