import React, { Component } from 'react'
import {TbTrashX} from 'react-icons/tb'

export class Order extends Component {
  render() {
    return (
      <div className='bgItem'>
        <div className='iTEm'>
            <img src={"./img/" + this.props.item.img} alt="prod" />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price} ₽</b>        
            <TbTrashX className='trash-delete' onClick={() => this.props.onDelete(this.props.item.id)} />
            <div className='addOrDelete'>
              <p className='orderMinus butOrder'>-</p>
              <p className='count'>1</p>
              <p className='orderPlus butOrder'>+</p>
            </div>
          </div>
       </div>
    )
  }
}

export default Order