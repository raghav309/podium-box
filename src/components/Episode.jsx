import Button from './Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Episode() {
    let episodeData = {
        thumbnailUrl: 'https://i1.sndcdn.com/avatars-H8iLvCjhV1XNZIzZ-yPLsvA-original.jpg',
        title: 'The ABB Edge: Using AI and Robotics to transform industries',
        size: 88,
        date: '22 Nov',
        duration: '01:00:28',
    };

    return (
        <div className="p-4 h-24 flex items-center gap-4 border border-[#c7c7c7] rounded-md">
            <div className="h-16 w-16">
                <img className="w-full rounded-md" src={episodeData.thumbnailUrl} alt="" />
            </div>
            <div className="Episode-detail">
                <div className="text-sm">
                    <span>{episodeData.date + ', '}</span>
                    <span>{episodeData.size} MB</span>
                </div>
                <p className="text-xl">{episodeData.title}</p>
                <div className="Episode-duration">{episodeData.duration}</div>
            </div>
            <div>
                <Button>
                    <PlayArrowIcon sx={{ fontSize: 32 }} />
                </Button>
            </div>
        </div>
    );
}

export default Episode;
