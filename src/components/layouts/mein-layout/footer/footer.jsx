import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/img/logo2.svg'
import { Container } from '../../../container'
import './fotter.css'
export const Footer = () => {
    return(
        <footer>
            <Container>
            <Row gutter={16} justify='space-evenly'>
                <Col className="gutter-row" span={8}>
                    <Row justify='center'>
                        <Col span={10}>
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={5}>
                   <Row>
                        <Col span={24}>
                            <h2 className="Links Links_title">FIGHT WITH ME ON:</h2>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Twitter
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Instagrem
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Telegram
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                YouTube
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Figma
                            </Link>
                        </Col>
                   </Row>
                </Col>
                <Col className="gutter-row" span={5}>
                   <Row>
                        <Col span={24}>
                            <h2 className="Links Links_title">WHAT I HAVE DONE:</h2>
                        </Col>
                        <Col span={24}>
                            <Link  className="Links" to='/'>
                                Halq Kutubhonasi
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Wepsitee
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Telegram
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Play Market
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                App Store
                            </Link>
                        </Col>
                   </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                   <Row>
                        <Col span={24}>
                            <h2 className="Links Links_title">Contact</h2>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Blog
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Dribble
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link className="Links"  to='/'>
                                Behance
                            </Link>
                        </Col>
                   </Row>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}