import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { SignUpForm } from '../../types/SignUpForm.d';
import { signUp as signUpApi } from '../../api/Auth';
import { RootState } from '..';

type UserData = {
	uid: string;
	firstName: string;
	lastName: string;
	firstLast: string;
	email: string;
	createdAt: string;
};

type AuthSliceState = {
	loading?: boolean;
	error?: string;
	accessToken?: string;
	userData?: UserData;
};

const initialState: AuthSliceState = {
	loading: false,
};

export const signUp = createAsyncThunk<
	AuthSliceState,
	SignUpForm,
	{ state: RootState; rejectValue: string }
>('auth/signUp', async signUpForm => await signUpApi(signUpForm));

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(signUp.pending, state => {
				state.loading = true;
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.loading = false;
				state.accessToken = action.payload.accessToken;
				state.userData = action.payload.userData;
			})
			.addCase(signUp.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default authSlice.reducer;
