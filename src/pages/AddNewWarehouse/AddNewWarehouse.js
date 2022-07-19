import React, { Component } from 'react';
import './AddNewWarehouse.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';

class AddNewWarehouse extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    country: '',
    contactName: '',
    contactPosition: '',
    contactPhone: '',
    contactEmail: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!');
  };

  render() {
    return (
      <div>
        <div className='page-heading'>
          <img src={backArrow} />
          <h2>Add New Warehouse</h2>
        </div>

        <form className='warehouse-form' type='submit' onSubmit={this.handleSubmit}>
          <fieldset className='warehouse-form__section'>
            <h3 className='warehouse-form__heading'>Warehouse Details</h3>
            <label className='warehouse-form__label'>Warehouse Name</label>
            <input
              className='warehouse-form__input'
              name='name'
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label className='warehouse-form__label'>Street Address</label>
            <input
              className='warehouse-form__input'
              name='address'
              onChange={(e) => this.setState({ address: e.target.value })}
            />
            <label className='warehouse-form__label'>City</label>
            <input
              className='warehouse-form__input'
              name='city'
              onChange={(e) => this.setState({ city: e.target.value })}
            />
            <label className='warehouse-form__label'>Country</label>
            <input
              className='warehouse-form__input'
              name='country'
              onChange={(e) => this.setState({ country: e.target.value })}
            />
          </fieldset>
          <fieldset className='warehouse-form__section'>
            <h3 className='warehouse-form__heading'>Contact Details</h3>
            <label className='warehouse-form__label'>Contact Name</label>
            <input
              className='warehouse-form__input'
              name='contactName'
              onChange={(e) => this.setState({ contactName: e.target.value })}
            />
            <label className='warehouse-form__label'>Position</label>
            <input
              className='warehouse-form__input'
              name='contactPosition'
              onChange={(e) =>
                this.setState({ contactPosition: e.target.value })
              }
            />
            <label className='warehouse-form__label'>Phone Number</label>
            <input
              className='warehouse-form__input'
              name='contactPhone'
              onChange={(e) => this.setState({ contactPhone: e.target.value })}
            />
            <label className='warehouse-form__label'>Email</label>
            <input
              className='warehouse-form__input'
              name='contactEmail'
              onChange={(e) => this.setState({ contactEmail: e.target.value })}
            />
          </fieldset>
          <div className='warehouse-form__button-wrapper'>
            <button className='warehouse-form__button--cancel'>Cancel</button>
            <button className='warehouse-form__button--CTA'>
              + Add Warehouse
            </button>
          </div>
        </form>
      </div>

      //       "id": "2922c286-16cd-4d43-ab98-c79f698aeab0",
      // "name": "Manhattan",
      // "address": "503 Broadway",
      // "city": "New York",
      // "country": "USA",
      // "contact": {
      //   "name": "Parmin Aujla",
      //   "position": "Warehouse Manager",
      //   "phone": "+1 (646) 123-1234",
      //   "email": "paujla@instock.com"
    );
  }
}

export default AddNewWarehouse;
