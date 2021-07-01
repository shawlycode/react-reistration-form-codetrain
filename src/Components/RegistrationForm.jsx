import React, { Component } from 'react'
import './RegistrationForm.css'

class RegistrationForm extends Component {
    render() {
        return (
            <div className="form-content">
                <div className="container-form">
                    <h3>Codetrain Registration Form</h3>
                    <p>This form is the first step to register for Codetrain's program starting on 25th July 2020. 
                     Our admissions team will reach out to you after successfully submitting your form. </p>
                     <span>* Required</span>
                </div>
                <div className="form-fields">
                    <label htmlFor="">Email</label><span>* </span>
                    <br />
                    <br />
                    <input type="email" name="email"placeholder="your email address"/>
                </div>
                <div className="form-fields">
                    <label htmlFor="">Fullname</label><span>* </span>
                    <br />
                    <br />
                    <input type="text" name="text"placeholder="your answer"/>
                </div>
                <div className="form-fields">
                    <label htmlFor="">Phone Number</label><span>* </span>
                    <br />
                    <br />
                    <input type="phone number" name="phone number"placeholder="your answer"/>
                </div>
                <div className="form-fields-inputs">
                    <h4>Phone Number Of Next Of King</h4>
                    <p>Phone number of someone we can reach out to in case your phone is off or not reachable.
                         Eg, your parent, guardian or sibling, or spouse</p>
                    <input type="phone number" name="phone number"placeholder="your answer"/>
                </div>
                <div className="form-fields-inputs">
                    <p>Can you pay 60% or more of the full Codetrain fees
                     (GHS6000 for Ghanaian applicants or $1,200 for international applicants)</p><span>*</span>
                     <input className="radio-btn"type="radio" name="radio" />
                     <label htmlFor="">Yes</label>
                     <br />
                     <input className="radio-btn" type="radio" name="radio" />
                     <label htmlFor="">Yes</label>
                    
                
                </div>
                <div className="form-fields-inputs">
                    <h4>Phone Number Of Next Of King</h4>
                    <p>Phone number of someone we can reach out to in case your phone is off or not reachable.
                         Eg, your parent, guardian or sibling, or spouse</p>
                    <input type="phone number" name="phone number"placeholder="your answer"/>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;
