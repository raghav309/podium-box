import { Link } from 'react-router-dom'

function Podcast({ podcastDetail }) {
    return (
        <Link
            className="rrd-link Podcast"
            to=""
        >
            <div className="Podcast-thumbnail">
                <img
                    src={podcastDetail.image}
                    alt=""
                />
            </div>

            <div className="Podcast-detail">
                <p className="Podcast-title">{podcastDetail.title}</p>
                <p className="Podcast-author">{podcastDetail.author}</p>
            </div>
        </Link>
    )
}

export default Podcast
