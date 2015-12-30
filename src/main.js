var React = require('react')
var ReactDom = require('react-dom')

var HelloWorld = React.createClass({
    render: function () {
        return (
                <p>
                Hello,
                    <input type="text" placeholder="Your name here" />
                !
                It is {this.props.date.toTimeString()}
                  It is {this.props.name.toString()}
                </p>
        );
    }
});

setInterval(function () {
  ReactDom.render(
    <HelloWorld date={new Date()} name="I am hehe" />,
    document.getElementById('example')
  );
}, 500);
