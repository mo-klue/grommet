// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Sidebar = require('grommet/components/Sidebar');
var Header = require('grommet/components/Header');
var Footer = require('grommet/components/Footer');
var Title = require('grommet/components/Title');
var TourMainMenu = require('./TourMainMenu');
var TourSessionMenu = require('./TourSessionMenu');

var TourMain = React.createClass({

  render: function() {
    return (
      <Sidebar primary={true}>
        <Header large={true} flush={false}>
          <Title>{"Grommet Tour"}</Title>
        </Header>
        <TourMainMenu />
        <Footer>
          <TourSessionMenu direction="up" />
        </Footer>
      </Sidebar>
    );
  }

});

module.exports = TourMain;
