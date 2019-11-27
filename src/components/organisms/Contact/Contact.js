import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";

const StyledFormContent = styled.div`
  input, textarea{
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    border: none;
    ::placeholder {
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #9e3737;
    }
  }
  div{ color: #ff0000; }
  button{
    border: 2px solid #f8f9fa;
    border-radius: 10px;
    font-size: 25px;
    transition: all 0.3s ease;
    &:hover { background-color: #e7e7e7; }
  }
`;

const Contact = () => (
  <StyledWrapper className="container col-12 col-md-9 my-5">
    <Formik
      initialValues={{ name: "", email: "", subject: "", textarea: "" }}
      validate={values => {
        let errors = {};

        if (!values.name) { errors.name = "Name is required"; }

        if (!values.email) {
          errors.email = "E-mail is required";
        } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
          errors.email = "Invalid email address";
        }

        if (!values.subject) { errors.subject = "Subject is required"; }

        if (!values.textarea) { errors.textarea = "Textarea is required"; }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        setSubmitting(true);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Form onSubmit={handleSubmit}>
          <StyledH1 title="true">Contact Me</StyledH1>

          <StyledFormContent className="d-flex flex-column text-center">
            <label htmlFor="name">Name and Surmane:</label>
            <input
              id="name"
              type="text"
              name="name"
              className="mb-5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder={errors.name && touched.name && errors.name}
            />

            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="mb-5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder={errors.email && touched.email && errors.email}
            />
            {
              errors.email === "Invalid email address" &&
              touched.email  &&
              (<div>{errors.email}</div>)
            }

            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              type="text"
              name="subject"
              className="mb-5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              placeholder={errors.subject && touched.subject && errors.subject}
            />

            <label htmlFor="content">Message Content:</label>
            <textarea
              id="content"
              name="textarea"
              type="text"
              className="mb-5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.textarea}
              placeholder={ errors.textarea && touched.textarea && errors.textarea }
            />

            <button className="btn btn-light p-3" type="submit" disabled={isSubmitting}>Send Message</button>
          </StyledFormContent>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

export default Contact;
