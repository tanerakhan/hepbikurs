import React, { Component } from 'react'
import {Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class Index extends Component {
    render() {
/*         const ForwardedLink = React.forwardRef((props, ref) => (
            <Link {...props} innerRef={ref} />
          )) */
        return (
            <Dropdown text='Kategoriler' icon='th'>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/hakkimizda" text='Yazılım'/>
                <Dropdown.Item as={Link} to="/" text='Diyetisyen' description=''/>
                <Dropdown.Item>
                    <Dropdown text='Eğitim'>
                        <Dropdown.Menu>
                            <Dropdown.Header>dersler</Dropdown.Header>
                            <Dropdown.Item>ingilizce dersi</Dropdown.Item>
                            <Dropdown.Item>matematik dersi</Dropdown.Item>
                            <Dropdown.Item>muzik dersi</Dropdown.Item>
                            <Dropdown.Item>futbol dersi</Dropdown.Item>
                            <Dropdown.Item>basketbol dersi</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Header>alanlar</Dropdown.Header>
                            <Dropdown.Item>y-eğitim</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
    }
}
