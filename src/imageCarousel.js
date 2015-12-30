var React = require('react');
var ReactDom = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ImageCarousel = React.createClass({
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <img src={this.props.imageSrc} key={this.props.imageSrc} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});


ReactDom.render(
  <ImageCarousel imageSrc="http://www.ifyouonlynews.com/wp-content/uploads/2014/12/nelson-haha1.jpg" />,
  document.getElementById('image_carousel')
);