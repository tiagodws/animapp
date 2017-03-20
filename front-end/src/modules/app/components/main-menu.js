import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Menu, Dropdown, Icon} from 'semantic-ui-react';
import {Link} from 'react-router';

class MainMenu extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
      const menuItems = [
        {path: "/", description: "Início"},
        {path: "/pets", description: "Adotar"},
        {description: "Cadastrar", menuItems: [
          {path: "/pets/new", description:"Pet"},
          {path: "/shelters/new", description: "Lar temporário"}
        ]},
        {path: "/account/login", description: "Login", posRight: true},
        {path: "/account/signup", description: "Registro", posRight: true}
      ];

        return (
            <Menu stackable>
                <Menu.Item header><Icon name='paw'/>Animapp</Menu.Item>
                {menuItems.filter(menuItem => !menuItem.posRight).map(menuItem => this.renderItem(menuItem.menuItems ? "dropDown" : "menuItem", menuItem))}

                <Menu.Menu stackable position='right'>
                {menuItems.filter(menuItem => !menuItem.posRight).map(menuItem => this.renderItem(menuItem.menuItems ? "dropDown" : "menuItem", menuItem))}
                </Menu.Menu>
            </Menu>
        )
    }

    renderItem(type, config) {
      switch(type) {
        case "menuItem": return this.renderMenuItem(config);
        case "dropDown": return this.renderDropdown(config);
      }
    }

    renderMenuItem(config) {
        return (
            <Link to={config.path}>
                <Menu.Item link>
                    {config.description}
                </Menu.Item>
            </Link>
        )
    }

    renderDropdown(config) {
        return (
            <Dropdown item text={config.description}>
                <Dropdown.Menu>
                    {config.menuItems.map(menuItem => (
                            <Link to={menuItem.path}>
                                <Dropdown.Item link>{menuItem.description}</Dropdown.Item>
                            </Link>
                      )
                    )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
