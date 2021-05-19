/* eslint-disable */
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Filter from './component/filter';
import Data from './component/data.json';
import Main from './component/main';
import SelectedBeast from './component/SelectedBeast';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedAnimal: {},
      Data: Data,
    }
  }
  
  handleShow = () => {
    this.setState({
      show: true,
    })
  }
  handleClose = () => {
    this.setState({
      show: false,
    })
  }
  displayAniml = (title) => {
    const selectedAnimal = Data.find(animle => {
      if (animle.title === title) {
        return animle;
      }
    })
    this.setState({
      show: true,
      selectedAnimal: selectedAnimal,
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          Data={this.state.Data}
          handleShow={this.handleShow}
          displayAniml={this.displayAniml}
        />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          selectedAnimal={this.state.selectedAnimal}
        />
        <Footer />
      </div>
    )
  }
}
export default App;