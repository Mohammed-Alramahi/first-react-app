/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfpets: 0,
        }
    }
    increaseNumberofclicks = () => {
        this.setState({
            numberOfpets: this.state.numberOfpets + 1,
        })
    }
    displayAniml=()=>{
        this.props.displayAniml(this.props.title)
    }
    render() {
        return ( 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Img onClick={this.displayAniml}  variant="top"  width="200px" height="200px" title={this.props.keyword} src={this.props.imageUrl} />
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.descreption}
                        <br/>
                        <h4>Votes : {this.state.numberOfpets}</h4>
                        <h4>horns: {this.props.hornsCount}</h4>
                        </Card.Text>
                        <Button onClick={this.increaseNumberofclicks} variant="secondary">Vote</Button>
                    </Card.Body>
                </Card>
        )
    }
}
export default HornedBeast;

