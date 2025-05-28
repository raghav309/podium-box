import { useSelector, useDispatch } from 'react-redux';
import {
    getAudioProgress,
    getAudioDuration,
    getAudioRef,
    getProgressBarRef,
} from '../state/uiSlice';

function PlayerProgressBar() {
    const audioDuration = useSelector(getAudioDuration);
    const audioProgress = useSelector(getAudioProgress);
    const dispatch = useDispatch();
    const audioRef = useSelector(getAudioRef);
    const progressBarRef = useSelector(getProgressBarRef);

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returendMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returendMin}:${returnedSeconds}`;
    };

    const onProgressChange = () => {
        if (audioRef.current && progressBarRef.current) {
            const newTime = Number(progressBarRef.current.value);
            audioRef.current.currentTime = newTime;
            dispatch(audioProgress(newTime));

            // if progress bar changes while audio is on pause
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(newTime / audioDuration) * 100}%`
            );
        }
    };

    return (
        <div className="px-4 flex-1 flex gap-4 justify-center items-center">
            <p>{formatTime(audioProgress)}</p>
            <div className="w-full">
                <input
                    className="SeekSlider w-full hover:cursor-pointer"
                    id="seek-slider"
                    type="range"
                    value="0"
                    ref={progressBarRef}
                    onChange={onProgressChange}
                />
            </div>
            <p>{formatTime(audioDuration)}</p>
        </div>
    );
}

export default PlayerProgressBar;
