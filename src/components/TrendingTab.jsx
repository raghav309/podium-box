import PodcastList from './PodcastList'
import trendingEpisodes from '../data/trendingData'

function TrendingTab() {
    return (
        <>
            <h1 className="Tab-title">Trending Podcasts:</h1>
            <PodcastList dataArr={trendingEpisodes} />
        </>
    )
}

export default TrendingTab
