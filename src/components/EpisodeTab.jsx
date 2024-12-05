import { episodeData } from '../data/episodeData'

function EpisodeTab() {
    return (
        <>
            <h1>episode title</h1>

            <div className="ChannelTab-header">
                <div className="ChannelTab-image">
                    <img
                        src={episodeData.image}
                        alt=""
                    />
                </div>

                <div className="ChannelTab-detail">
                    <p className="ChannelTab-title">{episodeData.title}</p>
                    <p>{episodeData.author}</p>
                </div>
            </div>

            <div className="EpisodeTab-summary">
                <h3>Episode Summary:</h3>
                <p>{episodeData.description}</p>
            </div>
        </>
    )
}

export default EpisodeTab
