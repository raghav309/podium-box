import Podcast from './Podcast';
import { useState, useEffect } from 'react';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

function PodcastList({ dataArr }) {
    /*
    const feedArr = []
    const [dataStatus, setDataStatus] = useState(false)
    useEffect(() => {
        const fetchEpisodes = async () => {
            const res = await fetch('https://api.podcastindex.org/api/1.0/podcasts/trending?pretty')
            const resJson = await res.json()
            
            if (res.ok) {
                feedArr = resJson.feeds
                setDataStatus(true)
            }
        }
    })
    */

    return (
        <div className="mb-32">
            {dataArr.map((podcastDetail) => (
                <Podcast podcastDetail={podcastDetail} />
            ))}
        </div>
    );
}

export default PodcastList;
