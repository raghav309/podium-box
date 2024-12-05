import trendingData from '../data/trendingData'
import EpisodeList from './EpisodeList'

function ChannelTab() {
    return (
        <>
            <h1>Channel title</h1>

            <div className="ChannelTab-header">
                <div className="ChannelTab-image">
                    <img
                        src={trendingData[1].image}
                        alt=""
                    />
                </div>

                <div className="ChannelTab-detail">
                    <p className="ChannelTab-title">{trendingData[1].title}</p>
                    <p>{trendingData[1].author}</p>
                </div>
            </div>

            <EpisodeList />
        </>
    )
}

export default ChannelTab
