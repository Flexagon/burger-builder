import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {
  state = {
    sideDrawer: false,
  }

  closeSideDrawer = () => this.setState({ sideDrawer: false });

  toggleSideDrawer = () => this.setState({ sideDrawer: true });

  render() {
    return(
      <Aux>
        <Toolbar drawerToggleClicked={this.toggleSideDrawer} />
        <SideDrawer closed={this.closeSideDrawer} open={this.state.sideDrawer} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};
