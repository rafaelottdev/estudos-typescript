import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Main from "../routes/Main.tsx/Main"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />
            }
        ]
    }
])
