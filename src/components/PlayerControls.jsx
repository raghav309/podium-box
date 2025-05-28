import { useRef, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Button from './Button';

import {
    setAudioRef,
    setProgressBarRef,
    getAudioPlayerState,
    getAudioDuration,
    audioDuration,
    audioProgress,
    toggleAudio,
} from '../state/uiSlice';

function PlayerControls() {
    const [isRepeat, setIsRepeat] = useState(false);
    const dispatch = useDispatch();
    const duration = useSelector(getAudioDuration);
    const playerState = useSelector(getAudioPlayerState);
    const playAnimationRef = useRef(null);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    dispatch(setAudioRef(audioRef));
    dispatch(setProgressBarRef(progressBarRef));

    const onLoadedMetaData = () => {
        const seconds = audioRef.current?.duration;

        if (seconds !== undefined) {
            dispatch(audioDuration(seconds));
            if (progressBarRef.current) {
                progressBarRef.current.max = seconds.toString();
            }
        }
    };

    const updateProgress = useCallback(() => {
        if (audioRef.current && progressBarRef.current && duration) {
            const currentTime = audioRef.current.currentTime;
            dispatch(audioProgress(currentTime));
            progressBarRef.current.value = currentTime.toString();
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(currentTime / duration) * 100}%`
            );
        }
    }, [duration, dispatch, audioRef, progressBarRef]);

    const startAnimation = useCallback(() => {
        if (audioRef.current && progressBarRef.current && duration) {
            const animate = () => {
                updateProgress();
                playAnimationRef.current = requestAnimationFrame(animate);
            };
            playAnimationRef.current = requestAnimationFrame(animate);
        }
    }, [updateProgress, duration, audioRef, progressBarRef]);

    useEffect(() => {
        if (audioRef !== null) {
            if (playerState) {
                audioRef.current.play();
                startAnimation();
            } else {
                audioRef.current.pause();
                if (playAnimationRef.current !== null) {
                    cancelAnimationFrame(playAnimationRef.current);
                    playAnimationRef.current = null;
                }
                updateProgress();
            }
        }

        return () => {
            if (playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
            }
        };
    }, [playerState, audioRef, startAnimation, updateProgress]);

    useEffect(() => {
        const currentAudioRef = audioRef.current;
        if (currentAudioRef) {
            currentAudioRef.onended = () => {
                if (isRepeat) {
                    currentAudioRef.play();
                } else {
                    //handleNext(); // This function should handle both shuffle and non-shuffle scenarios
                }
            };
        }
        return () => {
            if (currentAudioRef) {
                currentAudioRef.onended = null;
            }
        };
    }, [isRepeat, audioRef]);

    return (
        <div className="flex-none flex flex-row items-center gap-1">
            <audio
                id="audioTrack"
                src="./zulfaan.mp3"
                preload="metadata"
                ref={audioRef}
                onLoadedMetadata={onLoadedMetaData}
            ></audio>
            <Button>
                <SkipPreviousIcon />
            </Button>
            <Button onClickHandler={() => dispatch(toggleAudio(!playerState))}>
                {playerState ? <PauseIcon /> : <PlayArrowIcon />}
            </Button>
            <Button>
                <SkipNextIcon />
            </Button>
        </div>
    );
}

export default PlayerControls;
