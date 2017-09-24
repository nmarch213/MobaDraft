import React from 'react';
import { Field, reduxForm } from 'redux-form';

const HotsNewDraft = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <Field
              name="teamOneName"
              component="input"
              type="text"
              className="validate"
              label="Team 1 Name"
            />
            <label for="teamOneName">Team 1 Name</label>
          </div>
          <div className="input-field col s6">
            <Field
              name="teamTwoName"
              component="input"
              type="text"
              className="validate"
            />
            <label for="teamTwoName">Team 2 Name</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'HotsNewDraft' // a unique identifier for this form
})(HotsNewDraft);
