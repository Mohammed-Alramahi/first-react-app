/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {
  render() {
    return (
 <div >
          {this.props.Data.map((item, index) => {
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