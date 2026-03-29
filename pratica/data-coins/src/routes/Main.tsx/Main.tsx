import GlobalData from "../../components/GlobalData/GlobalData"
import Trending from "../../components/Trending/Trending"
import Markets from "../../components/Markets/Markets"

import "./Main.module.css"

const Main = () => {
    return (
        <main>
            <GlobalData />

            <Trending />
            
            <Markets />
        </main>
    )
}

export default Main
