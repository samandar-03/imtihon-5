import { Header } from "../../components"
import { Container } from "../../components/container"
import { Footer } from "../../components/layouts/mein-layout/footer"
import './ux.css'

export const UX = () => {
    return(
        <>
            <Header />
            <Container>
                <div className="ux">
                    <h1>UX Page</h1>
                </div>
            </Container>
            <Footer />
        </>
    )
}