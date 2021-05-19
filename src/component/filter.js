/* eslint-disable */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Data from './data.json';
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: "all",
            Data:Data
        };
        this.filterOptions=this.filterOptions.bind(this);
    }

    filterOptions = (e) => {
        console.log(this.state.filterValue);
        this.setState({
            filterValue: e.target.value
        })
        let filterdData= Data.filter(item=>{
            if(filterValue==='all'){
              return item;
            }
            else if(filterValue==='one'){
               if (item.horns===1){
                 return item;
               }
             }
             else if(filterValue==='two'){
               if(item.horns===2){
                 return item;
               }
             }
             else if(filterValue==='three'){
              if(item.horns===3){
                return item;
              }
            }
            else if(filterValue==='wow'){
              if(item.horns===100){
                return item;
              }
            }
             
          })
          this.setState({Data:filterdData});


    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Filter Options</Form.Label>
                        <Form.Control value={this.state.filterValue} style={{width: '450px'}} onChange={this.filterOptions} as="select">
                            <option value="all">ALL</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="wow">1000</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }


}
export default Filter;