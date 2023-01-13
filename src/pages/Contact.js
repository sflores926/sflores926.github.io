import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7adhli', 'contact_form1', form.current, 'Kteo0w-OkWtl8IrEj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className=' m-4 p-4'>
      <div className='border border-warning m-2 p-2 pb-3 mb-3'>
        <h2 className='text-center text-info'>Let's Get in Touch</h2>
        <p className="text-center text-white w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I'll try to get back to you as soon as possible.</p>
        <div className="row">
          <div className="col-md-12">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="text-center col-md-12 mb-3">
                  <label>Name:</label>
                  <input className="form-control" type="text" name="user_name" />
                </div>
                <div className=" text-center col-md-12 mb-3">
                  <label>Email:</label>
                  <input className="form-control" type="email" name="user_email" />
                </div>
                <div className="row">
                  <div className=" text-center col-md-12 mb-3">
                    <label>Message:</label>
                    <textarea className="form-control" rows="4" name="message" />
                  </div>
                </div>
                <div className="text-center text-md-left mb-3">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

