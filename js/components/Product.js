var React = require('react');

var Product = React.createClass({
  render: function() {
    return (
      <div className="product">
        <ProductTitle on_sale={this.props.product.on_sale}>
          {this.props.product.title}
        </ProductTitle>
        <ProductImage image={this.props.product.image} />
        <ProductDetails details={this.props.product.details} />
      </div>
    );
  }
});

var ProductTitle = React.createClass({
  render: function() {
    var text = this.props.children;
    return (
      <div className="productTitle">
        {text}
      </div>
    );
  }
});

var ProductImage = React.createClass({
  render: function() {
    return (
      <div className="ProductImage">
        <img src={this.props.image.url} width="100px" height="100px" />
      </div>
    );
  }
});

var ProductDetails = React.createClass({
  render: function() {  
    var productDetailNodes = this.props.details.map(function (productDetail) {
      return (
        <ProductDetail type={productDetail.type}>
          {productDetail.text}
        </ProductDetail>
      );
    });
    return (
      <div className="ProductDetails">
        {productDetailNodes}
      </div>
    );
  }
});

var ProductDetail = React.createClass({
  render: function() {
    return (
      <div className="productDetail">
        <i className="productDetailType">
          {this.props.type}:
        </i>
        &nbsp;
        {this.props.children}
      </div>
    );
  }
});

module.exports = Product;