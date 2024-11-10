import { createSlice } from '@reduxjs/toolkit';
import { SET_LIVE_CHAT } from './constants';

const chatSlice = createSlice({
	name: 'Chat',
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) => {
			state.messages.splice(SET_LIVE_CHAT, 1);
			state.messages.push(action.payload);
		},
	},
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
