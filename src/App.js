import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      earphones: [
        {
          id:1,
          img: "byzs852i.png",
          title: "Apple BYZ S852I",
          price: 2927,
          oldPrice: 3527,
          rate: 4.7,
        },
        {
          id:2,
          img: "earpods.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
        },
        {
          id:3,
          img: "earpodsCase2.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
        },
        {
          id:4,
          img: "byzs852i.png",
          title: "Apple BYZ S852I",
          price: 2927,
          oldPrice: 3527,
          rate: 4.7,
        },
        {
          id:5,
          img: "earpods.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
        },
        {
          id:6,
          img: "earpodsCase2.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
        },
      ],
      airphones: [
        {
      img: "airPodsCase.png",
      title: "Apple AirPods",      
      price: 9527,
      rate: 4.7,
   },
   {
      img: "gh04.png",
      title: "GERLAX GH-04",      
      price: 6527,
      rate: 4.7,
   },
   {
      img: "bf4.png",
      title: "BOROFONE BO4",      
      price: 7527,
      rate: 4.7,
   },
      ]      
    }
    
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.earphones} onAdd={this.addToOrder} />
        <Items items={this.state.airphones} onAdd={this.addToOrder} />
        <Footer />
      </div>    
    ); 
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
