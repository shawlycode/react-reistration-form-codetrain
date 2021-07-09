import React, { Component } from "react";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      phonenumber: "",
      nextOfking: "",
      checkedYes: "",
      checkedNo: "",
      checkedSelf: "",
      checkedParent: "",
      checkedOrganization: "",
      location: "",
      school: "",
      reasonTojoin: "",
      advert: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.email);
    console.log(this.state.fullname);
    console.log(this.state.phonenumber);
    console.log(this.state.nextOfking);
    console.log(this.state.checkedYes);
    console.log(this.state.checkedNo);
    console.log(this.state.checkedSelf);
    console.log(this.state.checkedParent);
    console.log(this.state.checkedOrganization);
    console.log(this.state.location);
    console.log(this.state.school);
    console.log(this.state.reasonTojoin);
    console.log(this.state.advert);
    e.preventDefault();

    this.setState({
      email: "",
      fullname: "",
      phonenumber: "",
      nextOfking: "",
      checkedYes: "",
      checkedNo: "",
      checkedSelf: "",
      checkedParent: "",
      checkedOrganization: "",
      location: "",
      school: "",
      reasonTojoin: "",
      advert: "",
    });
    alert("Form Succesfully Submitted");
  };

  render() {
    return (
      <div className="form-content">
        <div className="container-form" onSubmit={this.handleSubmit}>
          <h3>Codetrain Registration Form</h3>
          <p>
            This form is the first step to register for Codetrain's program
            starting on 25th July 2020. Our admissions team will reach out to
            you after successfully submitting your form.{" "}
          </p><span>* Required</span>
          
        </div>
        <div className="form-fields">
          <label htmlFor="">Email</label>
          <span>* </span>
          <br />
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            name="email"
            placeholder="your email address"
          />
        </div>
        <div className="form-fields">
          <label htmlFor="">Fullname</label>
          <span>* </span>
          <br />
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.fullname}
            type="text"
            name="fullname"
            placeholder="your answer"
          />
        </div>
        <div className="form-fields">
          <label htmlFor="">Phone Number</label>
          <span>* </span>
          <br />
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.phonenumber}
            type="phone number"
            name="phonenumber"
            placeholder="your answer"
          />
        </div>
        <div className="form-fields-inputs">
          <h4>Phone Number Of Next Of King</h4>
          <p>
            Phone number of someone we can reach out to in case your phone is
            off or not reachable. Eg, your parent, guardian or sibling, or
            spouse
          </p>
          <input
            onChange={this.handleChange}
            value={this.state.nextOfking}
            type="phone number"
            name="nextOfking"
            placeholder="your answer"
          />
        </div>
        <div className="form-fields-inputs">
          <p>
            Can you pay 60% or more of the full Codetrain fees (GHS6000 for
            Ghanaian applicants or $1,200 for international applicants)
          </p>
          <span>*</span>
          <input
            onChange={this.handleChange}
            value={this.state.checked}
            className="check-box"
            type="checkbox"
            name="checkedYes"
          />
          <label htmlFor="">Yes</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.checked}
            className="check-box"
            type="checkbox"
            name="checkedNo"
          />
          <label htmlFor="">No</label>
        </div>
        <div className="form-fields-inputs">
          <p>
            Please indicate who is going to pay your fees <span>*</span>
          </p>
          <input
            onChange={this.handleChange}
            value={this.state.checked}
            className="check-box"
            type="checkbox"
            name="checkedSelf"
          />
          <label htmlFor="">Yourself</label>
          <input
            onChange={this.handleChange}
            value={this.state.checked}
            className="check-box"
            type="checkbox"
            name="checkedParent"
          />
          <label htmlFor="">Parent/Sponsor</label>
          <input
            onChange={this.handleChange}
            value={this.state.checked}
            className="check-box"
            type="checkbox"
            name="checkedOrganization"
          />
          <label htmlFor="">Organization</label>
        </div>
        <div className="form2-fields-inputs">
          <p>
            Location <span>*</span>
          </p>
          <input
            onChange={this.handleChange}
            value={this.state.location}
            type="text"
            name="location"
            placeholder="your answer"
          />
        </div>
        <div className="form2-fields-inputs">
          <p>
            Current or Previous School <span>*</span>
          </p>
          <input
            onChange={this.handleChange}
            value={this.state.school}
            type="text"
            name="school"
            placeholder="your answer"
          />
        </div>
        <div className="form2-fields-inputs">
          <p>
            Why do you want to join Codetrain? <span>*</span>
          </p>
          <input
            onChange={this.handleChange}
            value={this.state.reasonTojoin}
            type="text"
            name="reasonTojoin"
            placeholder="your answer"
          />
        </div>
        <div className="form2-fields-inputs">
          <p>
            How did you hear about Codetrain? <span>*</span>
          </p>
          <input
            onChange={this.handleChange}
            value={this.state.advert}
            type="text"
            name="advert"
            placeholder="your answer"
          />
        </div>
        <p style={{textAlign:"center"}}>
          A copy of your responses will be emailed to the address that you
          provided.
        </p>
        <button type="submit" className="btn">Submimt</button>
  
      </div>
    );
  }
}

export default RegistrationForm;
