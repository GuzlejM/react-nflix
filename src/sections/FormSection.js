import React from "react";
import FormWrapper from "../components/Form/FormWrapper";
import FormEmail from "../components/Form/FormEmail";
import FormButton from "../components/Form/FormButton";

import "../components/Form/FormStyles.css";

import { auth } from "../firebase/firebase.utils";

class FormCompound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email } = this.state;

    return (
      <>
        <div className="form-text">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <FormWrapper onSubmit={this.handleSubmit}>
          <FormEmail
            name="email"
            handleChange={this.handleChange}
            type="email"
            value={email}
            label="email"
            required
          />
          <FormButton type="submit">Get Started</FormButton>
        </FormWrapper>
      </>
    );
  }
}

export default FormCompound;
