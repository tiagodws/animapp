import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Menu, Dropdown, Icon} from 'semantic-ui-react';
import {Link} from 'react-router';

class MainMenu extends Component{

    static contextTypes = {
        router: PropTypes.object
    }

    render() {

        const home = {path:'/', description:'Inicio'};
        const pets = {path:'/pets', description:'Adotar'};
        const register ={description: 'Cadastrar', items:[
            {path: '/pets/new', description:'Pet'},
            {path: '/shelters/new', description: 'Lar temporário'}
        ]};

        const signup = {path:'account/signup', description: 'Registro'};
        const login = {path:'account/login', description: 'Login'}

        return(
            <Menu stackable>
                <Menu.Item header><Icon name='paw'/>Animapp</Menu.Item>
                {this.renderMenuItem(home)}
                {this.renderMenuItem(pets)}
                {this.renderDropdown(register)}

                <Menu.Menu position='right'>
                    {this.renderMenuItem(login)}
                    {this.renderMenuItem(signup)}
                </Menu.Menu>
            </Menu>
        )
    }

    renderMenuItem(config){
        return(
            <Link to={config.path}>
                <Menu.Item link>
                    {config.description}
                </Menu.Item>
            </Link>
        )
    }

    renderDropdown(config){
        return(
            <Dropdown item
                text={config.description}
            >
                <Dropdown.Menu>
                    {config.items.map(item=>{
                        return(
                            <Link to={item.path}>
                                <Dropdown.Item link>{item.description}</Dropdown.Item>
                            </Link>
                        )
                    })}
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