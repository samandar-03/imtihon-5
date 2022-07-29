import { ClockCircleOutlined, FacebookOutlined, GithubOutlined, LinkedinOutlined, RightOutlined, TwitterOutlined } from "@ant-design/icons"
import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components"
import { Container } from "../../components/container"
import { Footer } from "../../components/layouts/mein-layout/footer"
import './post.css'

export const Posts = () => {
    const[posts, setPosts] = useState([])
    useEffect(() => {
        ;(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (res.ok) {
                const data = await res.json()
                return setPosts(data.slice(0, 20))
                 
            }
            console.error({status: res.status, massage: res.statusText});

        })()
    }, [])
    return(
        <>
            <Header />
            <Container>
            <Row justify="space-evenly"  gutter={[24, 8]}>
                <Col span={8}>
                    <h2 className="title">What I do!</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
                    </p>
                    <div className="btn">
                        <h3>EXPLORE ME</h3>
                        <button><RightOutlined /></button>
                    </div>
                    <Row className="row">
                        <Col className="col" span={3}>
                            <Link className="icon_link" to='/'>
                                <FacebookOutlined />
                            </Link>
                        </Col>
                        <Col className="col" span={3}>
                            <Link className="icon_link" to='/'>
                                <GithubOutlined />
                            </Link>
                        </Col>
                        <Col className="col" span={3}>
                            <Link className="icon_link" to='/'>
                                <TwitterOutlined />
                            </Link>
                        </Col>
                        <Col className="col" span={3}>
                            <Link className="icon_link" to='/'>
                                <LinkedinOutlined />
                            </Link>
                        </Col>
                    </Row>

                </Col>
                <Col span={14}>
                {posts.length > 0 && <ul className="posts">
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link className="Link" to={`/post/${post.id}`}>
                                <div className="post-text">
                                    <span>september 24.2020</span>
                                    <span>Color theory</span>
                                </div>
                                <h2 className="title">{post.title}</h2>
                                <h5 className="tims" ><ClockCircleOutlined /> 3 minuts read</h5>
                            </Link>
                        </li>
                    ))}
                    </ul>}
                </Col>
            </Row>
            </Container>
            <Footer />
        </>
    )
}