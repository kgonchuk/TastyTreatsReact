import { CloseButton, CloseIcon, Input, Label, ModalBody, ModalContent, ModalOverlay, ModalTitle, SubmitButton, TextArea } from "./ModalOrder.styled";
import sprite from '../../assets/sprite.svg';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

 const orderValidationSchema = Yup.object().shape({
  name: Yup.string().nullable(),
  email: Yup.string().nullable(),
  phone: Yup.string().nullable(),
  comment: Yup.string().nullable(),   
});

export const ModalOrder = ({closeModal}) => {
  return (
   <ModalOverlay>
    <ModalContent>
        <CloseButton onClick={closeModal}>
        <CloseIcon><use  href={`${sprite}#icon-close`}  /></CloseIcon></CloseButton>
      <ModalTitle>Order now</ModalTitle>
<Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        comment: '',
      }}
     validationSchema={orderValidationSchema} 
    >{({values, setFieldValue,  errors, touched,onChange})=>(
      <Form>
        <ModalBody>

            
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
          {errors.name && touched.name ? <div style={{color: 'red'}}>{errors.name}</div> : null} 

        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" name="phone" />
          {errors.phone && touched.phone ? <div style={{color: 'red'}}>{errors.phone}</div> : null} 

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
        />
         {errors.email && touched.email ? <div style={{color: 'red'}}>{errors.email}</div> : null} 

         <Label htmlFor="comment">Comment</Label>
         <TextArea id="comment" name="comment" rows="4" cols="50" />
       

        <SubmitButton type="submit">Send</SubmitButton>
        </ModalBody> 
      </Form>)}
    </Formik>

    </ModalContent>
   </ModalOverlay>
  );
}