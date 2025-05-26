import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Button from './Button';
import { getAudioPlayerState, toggleAudio } from '../state/uiSlice';

function AudioPlayer() {
    const [currentTime, setCurrentTime] = useState('00:00');
    const [duration, setDuration] = useState('00:00');
    const seekSlider = document.getElementById('seek-slider');
    const dispatch = useDispatch();
    const playState = useSelector(getAudioPlayerState);

    /*
    const showRangeProgress = (rangeInput) => {
        if (rangeInput === seekSlider)
            audioPlayerContainer.style.setProperty(
                '--seek-before-width',
                (rangeInput.value / rangeInput.max) * 100 + '%'
            );
        else
            audioPlayerContainer.style.setProperty(
                '--volume-before-width',
                (rangeInput.value / rangeInput.max) * 100 + '%'
            );
    };
    */

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returendMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returendMin}:${returnedSeconds}`;
    };

    const toggleAudioState = () => {
        let audioElement = document.getElementById('audioTrack');

        if (playState === true) {
            audioElement.pause();
        } else {
            audioElement.play();
        }

        dispatch(toggleAudio(!playState));
        setDuration(calculateTime(audioElement.duration));
    };

    return (
        <div className="absolute left-0 right-0 bottom-0 px-8 flex items-center gap-2 bg-white border-t border-[#c4c4c4]">
            <div className="h-16 w-16">
                <img
                    src="https://i1.sndcdn.com/avatars-H8iLvCjhV1XNZIzZ-yPLsvA-original.jpg"
                    alt=""
                />
            </div>

            <p>{currentTime}</p>
            <div className="w-full">
                <input className="w-full" type="range" id="seek-slider" max="100" value="0" />
            </div>
            <p>{duration}</p>
            <audio id="audioTrack" src="./zulfaan.mp3" preload="metadata" loop></audio>

            <div className="flex flex-row items-center gap-1">
                <Button>
                    <SkipPreviousIcon />
                </Button>
                <Button onClickHandler={toggleAudioState}>
                    {playState ? <PauseIcon /> : <PlayArrowIcon />}
                </Button>
                <Button>
                    <SkipNextIcon />
                </Button>
            </div>
        </div>
    );
}

export default AudioPlayer;
