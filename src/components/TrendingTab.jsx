import List from './List';
import ListItem from './ListItem';
import TabTitle from './TabTitle';
import ListItemLoader from './ListItemSkeleton';
import { useGetTrendingQuery } from '../state/apiSlice';

function TrendingTab() {
    const { data, isLoading, isSuccess, isError, error } = useGetTrendingQuery();

    let content;
    if (isLoading) {
        content = [0, 1, 2, 3, 4, 5].map(() => <ListItemLoader />);
    } else if (isSuccess) {
        console.log(data.feeds);
        content = data.feeds.map((podcastDetail) => <ListItem podcastDetail={podcastDetail} />);
    } else if (isError) {
        content = <p>oops feed cannot be loaded, there is an error</p>;
    }

    return (
        <>
            <TabTitle title="Trending podcasts:" />
            <List>{content}</List>
        </>
    );
}

export default TrendingTab;
