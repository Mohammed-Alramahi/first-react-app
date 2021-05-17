import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  }
  voteForAnimal = () => {
    this.setState({
      votes: this.state.votes+1,
    });
  }
  render() {
    return (
      <div>
        <Card style={{ width: '500px'}}>
          <Card.Img variant="top" width="200px" height="200px" title={this.props.keyword} src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}<br />
              <h4>horns: {this.props.hornsCount}</h4><br />
              <h4>Votes: {this.state.votes}</h4><br />
            </Card.Text>
            <Button onClick={this.voteForAnimal} variant="primary">Vote</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeasts;
