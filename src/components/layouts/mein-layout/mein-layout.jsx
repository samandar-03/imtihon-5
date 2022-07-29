import { Layout } from "antd"
const {Content} = Layout;

export const MeinLayout = ({children}) => {
    return(
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
        )
}