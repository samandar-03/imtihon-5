import { Col, Layout, Row, Input } from "antd"

import Search from "antd/lib/input/Search";
import { NavLink , Link} from "react-router-dom";
import logo from '../../../../assets/img/logo.svg'
import { Container } from "../../../container";
import './header.css'

const {Header: AntdHeader} = Layout
 

var onSearch = (evt) => {
    let regax = new RegExp(evt.trim(), 'gi')

        
    return console.log(regax);
}


export const Header = () => {
    return(
    <header>
        <AntdHeader style={{backgroundColor: '#fff'}}>
            <Container>
             <Row gutter={16} align='middle'>
                <Col className="gutter-row" span={9}>
                    <Link to='/'>
                        <img src={logo} alt="Site Logo" />
                    </Link>
                </Col>
                <Col className="gutter-row" span={1}>
                    <NavLink to='/posts' className={'link'}>All</NavLink>
                </Col>
                <Col className="gutter-row" span={3}>
                    <NavLink to='/Design-Theory' className={'link'} >Design Theory</NavLink>
                </Col>
                <Col className="gutter-row" span={1}>
                    <NavLink to='/ux' className={'link'}>UX</NavLink>
                </Col>
                <Col className="gutter-row" span={1}>
                    <NavLink to='/ui' className={'link'}>UI</NavLink>
                </Col>
                <Col className="gutter-row" span={2}>
                    <NavLink to='/typography' className={'link'}>Typography</NavLink>
                </Col>
                    <Search className="gutter-row search" span={4} placeholder="input search text" style={{width:'150px'}}
                     onSearch={onSearch} 
                     enterButton />
        
            </Row>
            </Container>
        </AntdHeader>
    </header>
    )
}