import PodcastList from './PodcastList';
import TabTitle from './TabTitle';
import trendingEpisodes from '../data/trendingData';

function TrendingTab() {
    return (
        <>
            <TabTitle title="Trending podcasts:" />
            <PodcastList dataArr={trendingEpisodes} />
        </>
    );
}

export default TrendingTab;
