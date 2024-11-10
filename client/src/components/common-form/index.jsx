import React from 'react'
import { Button } from '../ui/button'
import FormControls from './form-control'

const CommonForm = ({ handleSubmit, buttonText, formControls = [], formData, setFormData }) => {

  return (
    <form onSubmit={handleSubmit}>
        <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
        <Button type='submit' className="mt-5 w-full">{buttonText || 'Submit'}</Button>
    </form>
  )
}

export default CommonForm
