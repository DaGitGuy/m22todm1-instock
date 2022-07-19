import React, { Component } from 'react';
import axios from 'axios';
import './AddNewWarehouse.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';

// TODO: Add form input validation

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
    const warehouseDetails = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      contactName: this.state.contactName,
      contactPosition: this.state.contactPosition,
      contactPhone: this.state.contactPhone,
      contactEmail: this.state.contactEmail,
    };
    console.log('Submitted!', warehouseDetails);
    axios
      .post('http://localhost:8080/warehouses/add', warehouseDetails)
      .then((response) => {
        console.log(response);
        e.target.reset();
        // TODO succcess feedback
        // TODO page redirect
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='main-container'>
        <div className='main-heading'>
          <img src={backArrow} />
          <h2>Add New Warehouse</h2>
        </div>

        <form
          className='warehouse-form'
          type='submit'
          onSubmit={this.handleSubmit}>
          <fieldset className='warehouse-form__section warehouse-form__section--details'>
            <h3 className='warehouse-form__heading'>Warehouse Details</h3>
            <label className='warehouse-form__label' htmlFor='name'>
              Warehouse Name
              <input
                className='warehouse-form__input'
                name='name'
                value={this.state.name}
                placeholder='Warehouse Name'
                // Placeholders would be more useful if they showed example responses instead of repeating input label
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='address'>
              Street Address
              <input
                className='warehouse-form__input'
                name='address'
                value={this.state.address}
                placeholder='Street Address'
                onChange={(e) => this.setState({ address: e.target.value })}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='city'>
              City
              <input
                className='warehouse-form__input'
                name='city'
                value={this.state.city}
                placeholder='City'
                onChange={(e) => this.setState({ city: e.target.value })}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='country'>
              Country
              <input
                className='warehouse-form__input'
                name='country'
                value={this.state.country}
                placeholder='Country'
                onChange={(e) => this.setState({ country: e.target.value })}
              />
            </label>
          </fieldset>

          <fieldset className='warehouse-form__section warehouse-form__section--contact'>
            <h3 className='warehouse-form__heading'>Contact Details</h3>
            <label className='warehouse-form__label' htmlFor='contactName'>
              Contact Name
              <input
                className='warehouse-form__input'
                name='contactName'
                value={this.state.contactName}
                placeholder='Contact Name'
                onChange={(e) => this.setState({ contactName: e.target.value })}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='contactPosition'>
              Position
              <input
                className='warehouse-form__input'
                name='contactPosition'
                value={this.state.contactPosition}
                placeholder='Position'
                onChange={(e) =>
                  this.setState({ contactPosition: e.target.value })
                }
              />
            </label>

            <label className='warehouse-form__label' htmlFor='contactPhone'>
              Phone Number
              <input
                className='warehouse-form__input'
                name='contactPhone'
                value={this.state.contactPhone}
                placeholder='Phone Number'
                type='tel'
                onChange={(e) =>
                  this.setState({ contactPhone: e.target.value })
                }
              />
            </label>

            <label className='warehouse-form__label' htmlFor='contactEmail'>
              Email
              <input
                className='warehouse-form__input'
                name='contactEmail'
                value={this.state.contactEmail}
                placeholder='Email'
                type='email'
                onChange={(e) =>
                  this.setState({ contactEmail: e.target.value })
                }
              />
            </label>
          </fieldset>

          <div className='warehouse-form__button-wrapper'>
            {/* CTA button first in HTML for keyboarding order, reversed visually with flex:row-reverse */}
            <button className='warehouse-form__button warehouse-form__button--CTA'>
              + Add Warehouse
            </button>
            {/*  TODO check on expected behavior of cancel button: clear form or close form?  */}
            <button
              className=' warehouse-form__button warehouse-form__button--cancel'
              type='reset'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewWarehouse;
