import { Link } from 'react-router-dom';

function Podcast({ podcastDetail }) {
    const styleListItem =
        'Podcast rrd-link p-4 flex flex-row items-center gap-4 bg-white border border-[#c4c4c4] rounded-md hover:bg-[#c7c7c7] hover:cursor-pointer';

    return (
        <Link
            className={styleListItem}
            to=""
        >
            <div className="h-16 w-16">
                <img
                    className="w-full"
                    src={podcastDetail.image}
                    alt=""
                />
            </div>

            <div>
                <p className="text-xl font-medium">{podcastDetail.title}</p>
                <p className="text-sm">{podcastDetail.author}</p>
            </div>
        </Link>
    );
}

export default Podcast;
