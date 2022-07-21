import React, { Component } from 'react';
import axios from 'axios';
import './AddNewInventory.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import errorIcon from '../../assets/icons/error-24px.svg';

class AddNewInventory extends Component {
  state = {
    itemName: '',
    description: '',
    category: '',
    status: 'Out of Stock',
    quantity: '0',
    warehouseName: '',
    touched: {
      itemName: false,
      description: false,
      category: false,
      status: false,
      quantity: false,
      warehouseName: false,
    },
  };

  handleUserInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // if item is marked as out of stock, set quantity to 0
    if (e.target.name === 'status' && e.target.value === 'Out of Stock') {
      this.setState({ quantity: '0' });
    }
  };

  // Mark inputs as 'touched' after user has accessed them
  // Form error notifications only activated for 'touched' items
  handleBlur = (e) => {
    let touchedInput = e.target.name;
    let touchedStates = { ...this.state.touched };
    touchedStates[touchedInput] = true;
    this.setState({ touched: touchedStates });
  };

  // TODO validation for fields
  // item name - not empty
  // description - not empty
  // category not empty
  // quantity : >0 if status === 'In stock'
  // warehouse not empty

  isFormValid = () => {
    if (
      !this.state.itemName ||
      !this.state.description ||
      !this.state.category ||
      !this.state.quantity ||
      !this.state.warehouseName
    ) {
      return false;
    }

    // extra validation calls

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const inventoryDetails = {
      itemName: this.state.itemName,
      description: this.state.description,
      category: this.state.category,
      status: this.state.status,
      quantity: this.state.quantity,
      warehouseName: this.state.warehouseName,
    };
    axios
      .post('http://localhost:8080/inventories/add', inventoryDetails)
      .then(() => {
        e.target.reset();
        // TODO success message
        alert('New item added!');
        // TODO page redirect - to warehouse details?
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCancel = () => {
    this.setState({
      itemName: '',
      description: '',
      category: '',
      status: 'Out of stock',
      quantity: '0',
      warehouseName: '',
    });
  };

  render() {
    return (
      <div className='main-container'>
        <div className='main-heading'>
          <img src={backArrow} />
          <h1>Add New Inventory Item</h1>
        </div>

        <form
          className='inventory-form'
          type='submit'
          onSubmit={this.handleSubmit}>
          <fieldset className='inventory-form__section inventory-form__section--details'>
            <h2 className='inventory-form__heading'>Item Details</h2>
            <label className='inventory-form__label' htmlFor='itemName'>
              Item Name
              <input
                required
                className={
                  this.state.itemName || !this.state.touched.itemName
                    ? 'inventory-form__input'
                    : ' inventory-form__input inventory-form__input--invalid'
                }
                name='itemName'
                placeholder='Item Name'
                value={this.state.inventoryName}
                onChange={this.handleUserInput}
                onBlur={this.handleBlur}
              />
              {!this.state.inventoryName && this.state.touched.inventoryName && (
                <span className='inventory-form__error'>
                  <img className='inventory-form__error-icon' src={errorIcon} />
                  <p className='inventory-form__error-message'>
                    This field is required
                  </p>
                </span>
              )}
            </label>

            <label className='inventory-form__label' htmlFor='description'>
              Description
              <input
                className={
                  this.state.description || !this.state.touched.description
                    ? 'inventory-form__input'
                    : ' inventory-form__input inventory-form__input--invalid'
                }
                name='description'
                value={this.state.description}
                placeholder='Description'
                onChange={this.handleUserInput}
                onBlur={this.handleBlur}
              />
              {!this.state.description && this.state.touched.description && (
                <span className='inventory-form__error'>
                  <img className='inventory-form__error-icon' src={errorIcon} />
                  <p className='inventory-form__error-message'>
                    This field is required
                  </p>
                </span>
              )}
            </label>

            <label className='inventory-form__label' htmlFor='category'>
              Category
              <select
                className={
                  this.state.category || !this.state.touched.category
                    ? 'inventory-form__input'
                    : ' inventory-form__input inventory-form__input--invalid'
                }
                name='category'
                value={this.state.category}
                onChange={this.handleUserInput}
                onBlur={this.handleBlur}>
                <option disabled selected hidden>
                  Please select
                </option>
                {/* TODO load dynamic list of categories */}
              </select>
              {!this.state.category && this.state.touched.category && (
                <span className='inventory-form__error'>
                  <img className='inventory-form__error-icon' src={errorIcon} />
                  <p className='inventory-form__error-message'>
                    This field is required
                  </p>
                </span>
              )}
            </label>
          </fieldset>

          <fieldset className='inventory-form__section inventory-form__section--contact'>
            <h2 className='inventory-form__heading'>Item Availability</h2>
            {/* TODO review radio button code - https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs */}
            <label className='inventory-form__label' htmlFor='status'>
              Status
              <div className='inventory-form__radio'>
                <label className='inventory-form__radio-label'>
                  <input
                    type='radio'
                    id='in-stock'
                    className='inventory-form__radio-button'
                    name='status'
                    checked={this.state.status === 'In Stock'}
                    value='In Stock'
                    onChange={this.handleUserInput}
                  />
                  In Stock
                </label>
                <label className='inventory-form__radio-label'>
                  <input
                    type='radio'
                    id='in-stock'
                    className='inventory-form__radio-button'
                    name='status'
                    checked={this.state.status === 'Out of Stock'}
                    value='Out of Stock'
                    onChange={this.handleUserInput}
                  />
                  Out of Stock
                </label>
              </div>
            </label>
            <label className='inventory-form__label' htmlFor=''>
              Quantity
              <input
                className={
                  this.state.quantity || !this.state.touched.quantity
                    ? 'inventory-form__input'
                    : ' inventory-form__input inventory-form__input--invalid'
                }
                name='quantity'
                value={this.state.quantity}
                placeholder='0'
                disabled={this.state.status === 'Out of Stock'}
                onChange={this.handleUserInput}
                onBlur={this.handleBlur}
              />
              {/* After quantity has been modified, error message is displayed if the provided value is not a number */}
              {isNaN(parseInt(this.state.quantity)) &&
                this.state.touched.quantity && (
                  <span className='inventory-form__error'>
                    <img
                      className='inventory-form__error-icon'
                      src={errorIcon}
                    />
                    <p className='inventory-form__error-message'>
                      Quantity must be provided as a number.
                    </p>
                  </span>
                )}
              {this.state.status === 'In Stock' &&
                parseInt(this.state.quantity) === 0 &&
                this.state.touched.quantity && (
                  <span className='inventory-form__error'>
                    <img
                      className='inventory-form__error-icon'
                      src={errorIcon}
                    />
                    <p className='inventory-form__error-message'>
                      Please indicate quantity of items in stock or mark as out of stock.
                    </p>
                  </span>
                )}
            </label>

            <label className='inventory-form__label' htmlFor='warehouse'>
              Warehouse
              <select
                className={
                  this.state.warehouseName || !this.state.touched.warehouseName
                    ? 'inventory-form__input'
                    : ' inventory-form__input inventory-form__input--invalid'
                }
                name='warehouse'
                value={this.state.warehouseName}
                onChange={this.handleUserInput}
                onBlur={this.handleBlur}>
                <option disabled selected hidden>
                  Please select
                </option>
                {/* Load dynamic list of warehouses */}
              </select>
              {!this.state.warehouseName && this.state.touched.warehouseName && (
                <span className='inventory-form__error'>
                  <img className='inventory-form__error-icon' src={errorIcon} />
                  <p className='inventory-form__error-message'>
                    This field is required
                  </p>
                </span>
              )}
            </label>
          </fieldset>

          <div className='inventory-form__button-wrapper'>
            {/* CTA button first in HTML for keyboarding order, reversed visually with flex:row-reverse */}
            <button
              className='inventory-form__button inventory-form__button--CTA'
              disabled={!this.isFormValid()}>
              + Add Item
            </button>
            {/*  TODO check on expected behavior of cancel button: clear form or close form?  */}
            <button
              className=' inventory-form__button inventory-form__button--cancel'
              type='reset'
              onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewInventory;
