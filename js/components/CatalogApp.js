var Product = require('./Product');
var React = require('react');
import { Jumbotron, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

function getData() {
  return [
    {
      key: 1,
      title: "Dharma Logo",
      image: {url: "https://www.dropbox.com/s/k619p62cci2jxcl/dharmaOS.jpg?dl=1"},
      new: true,
      on_sale: false,
      details: [
        {type: "Price", text: "$35"},
        {type: "Shipping", text: "$5"},
        {type: "Qualifier", text: "Out of Stock"}
      ]
    },
    {
      key: 2,
      title: "Computer Table",
      image: {url: "https://www.dropbox.com/s/1i0bm4vm2vf51mt/closet%20office.jpg?dl=1"},
      new: false,
      on_sale: true,
      details: [
        {type: "Price", text: "$21"},
        {type: "Shipping", text: "$6"},
        {type: "Qualifier", text: "In Stock"}
      ]
    },
    {
      key: 3,
      title: "Peace Corps Logo",
      image: {url: "https://www.dropbox.com/s/ugovuu3s1i78loo/PeaceCorps.jpg?dl=1"},
      new: false,
      on_sale: true,
      details: [
        {type: "Price", text: "$10"},
        {type: "Shipping", text: "$0"},
        {type: "Qualifier", text: "In Stock"}
      ]
    }
  ]
}


var ProductList = React.createClass({ 
  render() {  
    var productNodes = this.props.products.map(function (product) {
      return (
        <Col xs={6} md={4}>
          <Product product={product} />
        </Col>
      );
    });
    return (
      <div className="ProductList">
        <Row className='show-grid'>
          {productNodes}
        </Row>
      </div>
    );
  }
});

var CatalogApp = React.createClass({ 
  render: function() {
    var product_data = getData()
    return(
      <div className="catalogApp">
        <Grid>
          <Row>
            <Col>
              <Jumbotron>
                <h4>Product Catalog</h4>
                <p><Button bsStyle='primary'>Shop Now</Button></p>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      
        <Grid>
          <ProductList products={product_data}/>
        </Grid>
      </div>
    );
  }
});

export default CatalogApp;
