import PauseIcon from '@mui/icons-material/Pause'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

function AudioPlayer() {
    return (
        <div className="AudioPlayer">
            <div className="AudioPlayer-thumbnail Episode-thumbnail">
                <img
                    src="https://i1.sndcdn.com/avatars-H8iLvCjhV1XNZIzZ-yPLsvA-original.jpg"
                    alt=""
                />
            </div>

            <div className="AudioPlayer-progressbar">
                <input
                    type="range"
                    id="seek-slider"
                    max="100"
                    value="0"
                />
            </div>

            <div className="AudioPlayer-btns">
                <div className="AudioPlayer-btn Episode-btn">
                    <SkipPreviousIcon />
                </div>

                <div className="AudioPlayer-btn Episode-btn">
                    <PauseIcon />
                </div>

                <div className="AudioPlayer-btn Episode-btn">
                    <SkipNextIcon />
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer
