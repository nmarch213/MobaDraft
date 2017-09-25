import React from 'react';
import { Field, reduxForm } from 'redux-form';

const HotsNewDraft = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="container-fluid">
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="teamOneName">Team 1 Name</label>
            <Field
              name="teamOneName"
              component="input"
              type="text"
              className="validate form-control"
              label="Team 1 Name"
              placeholder="monkaS"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="teamTwoName">Team 2 Name</label>
            <Field
              name="teamTwoName"
              component="input"
              type="text"
              className="validate form-control"
              placeholder="FeelsAmazingMan"
            />
          </div>
        </div>
        <div className="form-group col">
          <Field name="map" component="select" className="form-control">
            <option />
            <option value="BOE">Battlefield of Eternity</option>
            <option value="Hanamura">Hanamura</option>
            <option value="Towers of Doom">Towers of Doom</option>
            <option value="Garden of Terror">Garden of Terror</option>
            <option value="Dragon Shire">Dragon Shire</option>
            <option value="Blackheart's Bay">Blackheart's Bay</option>
            <option value="Cursed Hollow">Cursed Hollow</option>
            <option value="Warhead Junction">Warhead Junction</option>
            <option value="Braxis Holdout">Braxis Holdout</option>
            <option value="Tomb">Tomb of the Spider Queen</option>
            <option value="Sky Temple">Sky Temple</option>
            <option value="Infernal Shrines">Infernal Shrines</option>
            <option value="Haunted Mines">Haunted Mines</option>
          </Field>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'HotsNewDraft' // a unique identifier for this form
})(HotsNewDraft);
