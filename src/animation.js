var React = require('react');
var ReactDom = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

require('../src/main.css');

var Animation = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="animation" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

ReactDom.render(
  <Animation />,
  document.getElementById('animation')
);