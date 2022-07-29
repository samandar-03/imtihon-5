import { Header } from "../../components"
import './error-style.css'

export const Error = () => {
    return(
         <>
             <Header />
            <div className="error">
                <h1>404</h1>
                <h2>Page not found - 404</h2>
                <p>This page not found (deleted or never exists).<br/>Try a phrase in search box or back to home and start again.</p>
            </div>
         </>
    )
}