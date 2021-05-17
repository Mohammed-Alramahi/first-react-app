import React from 'react';
import HornedBeasts from './HornedBeasts';
import JSONData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends React.Component {



  render() {

    return (
      <div className='card-group'>
        {JSONData.map(item => {
          return (
            <HornedBeasts title={item.title} hornsCount={item.horns} imgUrl={item.image_url} description={item.description} keyword={item.keyword} />
          );
        })}
      </div>


    );
  }
}
export default Main;

// <HornedBeasts title='UniWhal' description='A unicorn and a narwhal nuzzling their horns' imgUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' />
//         <HornedBeasts title='Rhino Family' description='Mother (or father) rhino with two babies' imgUrl='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' />
//         <HornedBeasts title='Unicorn Head' description='Someone wearing a creepy unicorn head mask' imgUrl='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg' />
