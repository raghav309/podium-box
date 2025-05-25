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
import TabAccount from './components/TabAccount'
import TabChannel from './components/TabChannel'

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="/trending" element={<TrendingTab />} />
            <Route path="/inbox" element={<InboxTab />} />
            <Route path="/subscriptions" element={<ChannelTab />} />
            <Route path="/playlists" element={<EpisodeTab />} />
            <Route path="/account" element={<TabAccount />} />
            <Route path="/channel/:channelId" element={<TabChannel />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={appRouter} />
}

export default App
