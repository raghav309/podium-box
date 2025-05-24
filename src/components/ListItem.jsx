import { Link } from 'react-router-dom';

function ListItem({ podcastDetail, children }) {
    return (
        <Link
            className="Podcast p-4 max-w-2xl flex flex-row items-center gap-4 bg-white border border-[#c4c4c4] rounded-md hover:bg-[#c7c7c7] hover:cursor-pointer"
            to=""
        >
            <div className="h-16 w-16 grow-0 shrink-0">
                <img className="w-full rounded-md" src={podcastDetail.image} alt="" />
            </div>
            <div>
                <p className="text-l md:text-xl font-medium">{podcastDetail.title}</p>
                <p className="text-sm">{podcastDetail.author}</p>
            </div>
            {children}
        </Link>
    );
}

export default ListItem;
