import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        activeTab: 'Trending',
        isAudioPlaying: false,
        audioDuration: 0,
        audioProgress: 0,
        audioRef: null,
        progressBarRef: null,
    },
    reducers: {
        activateTab: (state, action) => {
            state.activeTab = action.payload;
        },
        toggleAudio: (state) => {
            state.isAudioPlaying = !state.isAudioPlaying;
        },
        audioDuration: (state, action) => {
            state.audioDuration = action.payload;
        },
        audioProgress: (state, action) => {
            state.audioProgress = action.payload;
        },
        setAudioRef: (state, action) => {
            state.audioRef = action.payload;
        },
        setProgressBarRef: (state, action) => {
            state.progressBarRef = action.payload;
        },
    },
});

export const {
    activateTab,
    toggleAudio,
    audioDuration,
    audioProgress,
    setAudioRef,
    setProgressBarRef,
} = uiSlice.actions;
export const getActiveTab = (state) => state.ui.activeTab;
export const getAudioPlayerState = (state) => state.ui.isAudioPlaying;
export const getAudioDuration = (state) => state.ui.audioDuration;
export const getAudioProgress = (state) => state.ui.audioProgress;
export const getAudioRef = (state) => state.ui.audioRef;
export const getProgressBarRef = (state) => state.ui.progressBarRef;
export default uiSlice.reducer;
