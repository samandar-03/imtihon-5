import { ClockCircleOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons"
import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components"
import { Container } from "../../components/container"
// import img from '../../assets/img/imiges.css'
import './post-single.css'

export const PostSingle = () => {
    const {id} = useParams()
    const[post, setPost] = useState({})
    const[text, setText] = useState(0)
    const[text2, setText2] = useState(0)
    const hendlebtn = () => {
        return(
            setText(text + 1)
        )
    }
    const hendleshare = () => {
        return setText2(text2 + 1)
    }

    useEffect(() => {
        ;(async() => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if (res.ok) {
               return setPost(await res.json()) 
            }
        })()
    }, [id])

    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="btns" span={6}>
                        <button onClick={hendlebtn}><HeartOutlined /></button>
                        <p>{text}</p>
                        <button onClick={hendleshare}><ShareAltOutlined /></button>
                        <p>{text2}</p>
                    </Col>
                    <Col span={18}>
                        <p>User interface</p>
                        <h2>{post.title}</h2>
                        <div className="day">
                            <p>October 24, 2020</p>
                            <p className="team"><ClockCircleOutlined />  3 minutes read</p>
                        </div>
                        {/* <img src={img} alt="img" /> */}
                        <p>{post.body}</p>
                    </Col>
                </Row>
            </Container>
        </>

    )
}