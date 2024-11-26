import PlayArrowIcon from '@mui/icons-material/PlayArrow'

function Episode() {
    let episodeData = {
        thumbnailUrl: 'https://i1.sndcdn.com/avatars-H8iLvCjhV1XNZIzZ-yPLsvA-original.jpg',
        title: 'The ABB Edge: Using AI and Robotics to transform industries',
        size: 88,
        date: '22 Nov',
        duration: '01:00:28',
    }

    return (
        <div className="Episode">
            <div className="Episode-thumbnail">
                <img
                    src={episodeData.thumbnailUrl}
                    alt=""
                />
            </div>
            <div className="Episode-detail">
                <div className="Episode-ds">
                    <span>{episodeData.date + ', '}</span>
                    <span>{episodeData.size} MB</span>
                </div>
                <p className="Episode-title">{episodeData.title}</p>
                <div className="Episode-duration">{episodeData.duration}</div>
            </div>
            <div className="Episode-btns">
                <div className="Episode-btn">
                    <PlayArrowIcon sx={{ fontSize: 32 }} />
                </div>
            </div>
        </div>
    )
}

export default Episode
