import trendingData from '../data/trendingData';
import EpisodeList from './EpisodeList';

function ChannelTab() {
    return (
        <>
            <h1>Channel title</h1>

            <div className="my-4 mx-0 p-4 sticky top-0 flex gap-4 bg-white">
                <div className="h-32 w-32">
                    <img className="w-full" src={trendingData[1].image} alt="" />
                </div>

                <div className="ChannelTab-detail">
                    <p className="text-4xl">{trendingData[1].title}</p>
                    <p>{trendingData[1].author}</p>
                </div>
            </div>

            <EpisodeList />
        </>
    );
}

export default ChannelTab;
