import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom'

import Home from './components/Home'
import TrendingTab from './components/TrendingTab'
import InboxTab from './components/InboxTab'
import ChannelTab from './components/ChannelTab'
import EpisodeTab from './components/EpisodeTab'

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
            <Route
                path="/channel"
                element={<ChannelTab />}
            />
            <Route
                path="/episode"
                element={<EpisodeTab />}
            />
        </Route>
    )
)

function App() {
    return <RouterProvider router={appRouter} />
}

export default App
