import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { SignUpForm } from '../../types/SignUpForm.d';
import { signUp as signUpApi } from '../../api/Auth';
import { RootState } from '..';
import { FirebaseError } from 'firebase/app';

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
>('auth/signUp', async (signUpForm, thunkApi) => {
	try {
		return await signUpApi(signUpForm);
	} catch (error) {
		if (error instanceof FirebaseError)
			return thunkApi.rejectWithValue(error.code);
		else return thunkApi.rejectWithValue('Something went wrong!');
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetError: state => (state.error = undefined),
	},
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

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
