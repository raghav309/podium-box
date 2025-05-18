import PodcastList from './PodcastList';
import trendingEpisodes from '../data/trendingData';

function TrendingTab() {
    return (
        <>
            <h1 className="mx-0 my-4 sticky top-0 bg-white">Trending Podcasts:</h1>
            <PodcastList dataArr={trendingEpisodes} />
        </>
    );
}

export default TrendingTab;
