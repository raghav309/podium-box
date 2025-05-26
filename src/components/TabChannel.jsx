import { useParams } from 'react-router-dom';
import TabTitle from './TabTitle';
import List from './List';
import ListItem from './ListItem';
import ListItemControls from './ListItemControls';
import Button from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useGetChannelByFeedIdQuery } from '../state/apiSlice';
import trendingEpisodes from '../data/trendingData';

function TabChannel() {
    const { channelId } = useParams();
    const { data, isLoading, isSuccess, isError, error } = useGetChannelByFeedIdQuery(channelId);
    let content;

    if (isLoading) {
        content = <TabTitle title="feed is loading..." />;
    } else if (isSuccess) {
        content = (
            <>
                <TabTitle title="Channel" />
                <section id="TabBody">
                    <section id="ChannelHero" className="py-4 bg-white">
                        <div className="h-16 w-16">
                            <img className="w-full rounded-md" src={data.feed.image} alt="" />
                        </div>
                        <div id="ChannelDetails">
                            <p>{data.feed.title}</p>
                            <p>{data.feed.author}</p>
                        </div>
                        <p>{data.feed.description}</p>
                    </section>
                    <List>
                        {trendingEpisodes.map((podcastDetail) => (
                            <ListItem podcastDetail={podcastDetail}>
                                <ListItemControls>
                                    <Button>
                                        <PlayArrowIcon sx={{ fontSize: 32 }} />
                                    </Button>
                                </ListItemControls>
                            </ListItem>
                        ))}
                    </List>
                </section>
            </>
        );
    } else if (isError) {
        console.log(error);
    }

    return <>{content}</>;
}

export default TabChannel;
