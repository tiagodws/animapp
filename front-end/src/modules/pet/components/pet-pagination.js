import React,{Component} from 'react';
import {Menu} from 'semantic-ui-react';

class PetPagination extends Component{
    render(){
        return(
            <Menu pagination>
                <Menu.Item name='1'/>
                <Menu.Item disabled>...</Menu.Item>
                <Menu.Item name='10'/>
                <Menu.Item name='11' />
                <Menu.Item name='12' />
            </Menu>
        )
    }

}

export default PetPagination;