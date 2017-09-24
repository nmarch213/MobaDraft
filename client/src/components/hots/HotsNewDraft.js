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
            <label htmlFor="teamOneName">Team 1 Name</label>
          </div>
          <div className="input-field col s6">
            <Field
              name="teamTwoName"
              component="input"
              type="text"
              className="validate"
            />
            <label htmlFor="teamTwoName">Team 2 Name</label>
          </div>
          <div className="input-field col s12">
            <Field name="map" component="select">
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
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'HotsNewDraft' // a unique identifier for this form
})(HotsNewDraft);
