import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';
import './AddNewWarehouse.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';

// TODO: Add form input validation

class AddNewWarehouse extends Component {
  state = {
    warehouseName: '',
    address: '',
    city: '',
    country: '',
    name: '',
    position: '',
    phone: '',
    email: '',
  };

  handleUserInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isPhoneValid = () => {
      const phonePattern = new RegExp('^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$');
      if (phonePattern.test(this.state.phone)){
          return true;
      }
      return false;
  }

  isEmailValid = () => {
      if (validator.isEmail(this.state.email)){
          return true;
      }
      return false;
  }

  isFormValid = () => {
    if (
      !this.state.warehouseName ||
      !this.state.address ||
      !this.state.city ||
      !this.state.country ||
      !this.state.name ||
      !this.state.position ||
      !this.state.phone ||
      !this.state.email
    ) {
      return false;
    }

    if (!this.isPhoneValid()) {
      return false;
    }

    if (!this.isEmailValid()) {
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const warehouseDetails = {
      warehouseName: this.state.warehouseName,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      name: this.state.name,
      position: this.state.position,
      phone: this.state.phone,
      email: this.state.email,
    };
    axios
      .post('http://localhost:8080/warehouses/add', warehouseDetails)
      .then(() => {
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
          <h1>Add New Warehouse</h1>
        </div>

        <form
          className='warehouse-form'
          type='submit'
          onSubmit={this.handleSubmit}>
          <fieldset className='warehouse-form__section warehouse-form__section--details'>
            <h2 className='warehouse-form__heading'>Warehouse Details</h2>
            <label className='warehouse-form__label' htmlFor='warehouseName'>
              Warehouse Name
              <input
                required
                className='warehouse-form__input'
                name='warehouseName'
                value={this.state.warehouseName}
                placeholder='Warehouse Name'
                onChange={this.handleUserInput}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='address'>
              Street Address
              <input
                className='warehouse-form__input'
                name='address'
                value={this.state.address}
                placeholder='Street Address'
                onChange={this.handleUserInput}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='city'>
              City
              <input
                className='warehouse-form__input'
                name='city'
                value={this.state.city}
                placeholder='City'
                onChange={this.handleUserInput}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='country'>
              Country
              <select
                required
                className='warehouse-form__input'
                id='country'
                name='country'
                value={this.state.country}
                onChange={this.handleUserInput}>
                <option value='' disabled hidden>
                  Choose country
                </option>
                <option value='canada'>Canada</option>
                <option value='united states'>United States</option>
              </select>
            </label>
          </fieldset>

          <fieldset className='warehouse-form__section warehouse-form__section--contact'>
            <h2 className='warehouse-form__heading'>Contact Details</h2>
            <label className='warehouse-form__label' htmlFor='name'>
              Contact Name
              <input
                className='warehouse-form__input'
                name='name'
                value={this.state.name}
                placeholder='Contact Name'
                onChange={this.handleUserInput}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='position'>
              Position
              <input
                className='warehouse-form__input'
                name='position'
                value={this.state.position}
                placeholder='Position'
                onChange={this.handleUserInput}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='phone'>
              Phone Number
              <input
                className='warehouse-form__input'
                name='phone'
                value={this.state.phone}
                placeholder='Phone Number'
                type='tel'
                onChange={this.handleUserInput}
              />
            </label>

            <label className='warehouse-form__label' htmlFor='email'>
              Email
              <input
                className='warehouse-form__input'
                name='email'
                value={this.state.email}
                placeholder='Email'
                type='email'
                onChange={this.handleUserInput}
              />
            </label>
          </fieldset>

          <div className='warehouse-form__button-wrapper'>
            {/* CTA button first in HTML for keyboarding order, reversed visually with flex:row-reverse */}
            <button
              className='warehouse-form__button warehouse-form__button--CTA'
              disabled={!this.isFormValid()}>
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
