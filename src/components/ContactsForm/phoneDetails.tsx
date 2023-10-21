import { useForm } from 'react-hook-form';
import Section from '../UI/Section';
// phone: PhoneNumber[] need to be able to show multiple and add...

const PhoneDetails = (props: any) => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    return (
        <Section key={props.id} >
                {props.phone} 
            <input {...register("phoneNumber")}
              placeholder="Phone Number" 
            />
        </Section>
    )
}

export default PhoneDetails;