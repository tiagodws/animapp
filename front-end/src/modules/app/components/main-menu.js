import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Menu, Dropdown} from 'semantic-ui-react';
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

        return(
            <Menu stackable>
                <Menu.Item header>Animapp</Menu.Item>
                {this.renderMenuItem(home)}
                {this.renderMenuItem(pets)}
                {this.renderDropdown(register)}
            </Menu>
        )
    }

    renderMenuItem(config){
        debugger;
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