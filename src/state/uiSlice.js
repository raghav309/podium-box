import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { activeTab: 'Trending', isAudioPlaying: false },
    reducers: {
        activateTab: (state, action) => {
            state.activeTab = action.payload;
        },
        toggleAudio: (state) => {
            state.isAudioPlaying = !state.isAudioPlaying;
        },
    },
});

export const { activateTab, toggleAudio } = uiSlice.actions;
export const getActiveTab = (state) => state.ui.activeTab;
export const getAudioPlayerState = (state) => state.ui.isAudioPlaying;
export default uiSlice.reducer;
