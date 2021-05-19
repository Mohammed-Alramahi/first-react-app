/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import Form from 'react-bootstrap/Form';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: Data,
      Data: Data
    };
  }
  filterOptions = (e) => {
    e.preventDefault();
    console.log(this.state.filterValue);
    let filterdData = Data.filter(item => {
        if(e.target.value== 'all'){
          return item;
        }
      
        if (item.horns == e.target.value ) {
          return item;
        }
    })
    this.setState({ filterData: filterdData });
    
    
    console.log(this.state.Data, "main");
    
  }
  render() {
    return (
      <div >
        <Form name="parentForm">
          <Form.Group>
            <Form.Label>Filter Options</Form.Label>
            <Form.Control style={{ width: '450px' }} custom name='filter' value={this.state.filterValue} onChange={this.filterOptions} as="select">
              <option value="all">ALL</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">1000</option>
            </Form.Control>
          </Form.Group>
        </Form>
        {this.state.filterData.map((item, index) => {
          return (
            <HornedBeast
              title={item.title}
              imageUrl={item.image_url}
              descreption={item.description}
              hornsCount={item.horns}
              key={index}
              displayAniml={this.props.displayAniml}
            />
          )
        })

        }
      </div>
    )
  }
}
export default Main;