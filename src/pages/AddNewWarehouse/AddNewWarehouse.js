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
          <fieldset className='warehouse-form__section warehouse-form__section--contact'>
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
            {/* CTA button first in HTML for keyboarding order, reversed visually with flex:row-reverse */}
            <button className='warehouse-form__button warehouse-form__button--CTA'>
              + Add Warehouse
            </button>
            <button className=' warehouse-form__button warehouse-form__button--cancel'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewWarehouse;
