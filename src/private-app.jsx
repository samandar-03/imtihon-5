import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { Design } from "./pages/design"
import { Error } from "./pages/error"
import { PostSingle } from "./pages/post-single"
import { Posts } from "./pages/posts"
import { Typography } from "./pages/typography"
import { UI } from "./pages/ui"
import { UX } from "./pages/ux"

export const PrivateApp = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/Design-Theory" element={<Design />}/>
            <Route path="/ux" element={<UX />}/>
            <Route path="/ui" element={<UI />}/>
            <Route path="/Typography" element={<Typography />}/>
            <Route path="/post/:id" element={<PostSingle />}/>
            <Route path="/sontskt" element={<>contakt</>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
        </> 
    )
}