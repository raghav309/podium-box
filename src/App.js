import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom'

import Home from './components/Home'
import TrendingTab from './components/TrendingTab'
import InboxTab from './components/InboxTab'

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Home />}
        >
            <Route
                path="/trending"
                element={<TrendingTab />}
            />
            <Route
                path="/inbox"
                element={<InboxTab />}
            />
        </Route>
    )
)

function App() {
    return <RouterProvider router={appRouter} />
}

export default App
