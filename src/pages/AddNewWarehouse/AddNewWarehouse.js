import React, { Component } from 'react';
import './AddNewWarehouse.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';

class AddNewWarehouse extends Component {
  render() {
    return (
      <div>
        <div className='page-heading'>
          <img src={backArrow} />
          <h2>Add New Warehouse</h2>
        </div>

        <form className='warehouse-form'>
          <fieldset className='warehouse-form__section'>
            <h3 className='warehouse-form__heading'>Warehouse Details</h3>
            <label className='warehouse-form__label'>Warehouse Name</label>
            <input className='warehouse-form__input' />
            <label className='warehouse-form__label'>Street Address</label>
            <input className='warehouse-form__input' />
            <label className='warehouse-form__label'>City</label>
            <input className='warehouse-form__input' />
            <label className='warehouse-form__label'>Country</label>
            <input className='warehouse-form__input' />
          </fieldset>
          <fieldset className='warehouse-form__section'>
            <h3 className='warehouse-form__heading'>Contact Details</h3>
            <label className='warehouse-form__label'>Contact Name</label>
            <input className='warehouse-form__input' />
            <label className='warehouse-form__label'>Position</label>
            <input className='warehouse-form__input' />
            <label className='warehouse-form__label'>Phone Number</label>
            <input className='warehouse-form__input' />
            <label className='warehouse-form__label'>Email</label>
            <input className='warehouse-form__input' />
          </fieldset>
          <div className='warehouse-form__button-wrapper'>
            <button className='warehouse-form__button--cancel'>Cancel</button>
            <button className='warehouse-form__button--CTA'>
              + Add Warehouse
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewWarehouse;
