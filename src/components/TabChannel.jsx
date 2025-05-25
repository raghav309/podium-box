import { useParams } from 'react-router-dom';
import TabTitle from './TabTitle';
import { useGetChannelByFeedIdQuery } from '../state/apiSlice';

function TabChannel({ channelName }) {
    const { channelId } = useParams();
    const { data, isLoading, isSuccess, isError, error } = useGetChannelByFeedIdQuery(channelId);

    let content;
    if (isLoading) {
        content = 'feed is loading...';
    } else if (isSuccess) {
        content = data.feed.title;
    } else if (isError) {
        console.log(error);
    }

    return (
        <>
            <TabTitle title={content} />
        </>
    );
}

export default TabChannel;
