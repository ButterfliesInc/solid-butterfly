import { useForm } from 'react-hook-form';
//import { Contact } from '../../models/contacts/types'
import FormContainer from '../../components/UI/FormContainer';
import PhoneDetails from './phoneDetails'

import classes from './ContactsForm.module.css';
//  {props.children}
interface ContactsFormProps {
}
/*
  email: Email[]
  address: Address
  groups: string[]
  roles: string[]
  socialMediaAccounts: string[]
  organizations: string[]
  contactType: ContactType */

const ContactsForm = (props: any) => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit = (data: any) => console.log(data)
    return (
      <FormContainer icon='person' name='Contact' navItems={null} backgroundColor='background-aqua-lt'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
            <input {...register("firstName", { required: "This is required"})}
              placeholder="First Name" 
            />
            <input {...register("lastName", { required: "This is required"})}
              placeholder="Last Name" />
            <input {...register("phoneNumber")}
              placeholder="Phone Number" 
            />
        </div>
        <input type="submit" />
      </form>
      </FormContainer>
    );
};

export default ContactsForm;
