import React, { Component } from 'react'
import {AiOutlineStar} from 'react-icons/ai'

export class Item extends Component {
  render() {
    return (
       <div className='item'>
          <img src={"./img/" + this.props.item.img} alt="prod" />
          <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} ₽</b>
        <p className='oldPrice'>{this.props.item.oldPrice}</p>
        <p className='rate'>
          <AiOutlineStar className='star' />
          <span className='rate-rating'>{this.props.item.rate}</span>
        </p>
          <div className='addToCart' onClick={() => {this.props.onAdd(this.props.item)}}>Купить</div>
      </div>
    )
  }
}

export default Item