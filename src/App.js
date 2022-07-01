import React from 'react';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Table",
          img: "table.jpg",
          desc: "Lorem Ipsum asod ddsad",
          category: "table",
          price: "79,99"
        },
        {
          id: 2,
          title: "Stol",
          img: "stol.jpg",
          desc: "Lorem Ipsum asod ddsad",
          category: "stol",
          price: "61,99"
        },
        {
          id: 3,
          title: "Divan",
          img: "stul.jpg",
          desc: "Lorem Ipsum asod ddsad",
          category: "divan",
          price: "49,99"
        },
        {
          id: 4,
          title: "Televizor",
          img: "divan.jpg",
          desc: "Lorem Ipsum asod ddsad",
          category: "televizor",
          price: "52,99"
        },
        {
          id: 5,
          title: "Ванная комната",
          img: "baxniq.jpg",
          desc: "Lorem Ipsum asod ddsad",
          category: "baxniq",
          price: "52,99"

        }


      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deletOrder = this.deletOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deletOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })

  }


  deletOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })


  }


  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
