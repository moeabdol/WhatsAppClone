import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SignUpForm } from '../../types/SignUpForm.d';
import { signUp as signUpApi } from '../../api/Auth';

type AuthState = {
	loading: boolean;
	error: string | undefined;
	accessToken: string | undefined;
	userData: any | undefined;
};

const initialState: AuthState = {
	loading: false,
	error: undefined,
	accessToken: undefined,
	userData: undefined,
};

export const signUp = createAsyncThunk(
	'auth/signUp',
	async (signUpForm: SignUpForm, thunkApi) => {
		try {
			return await signUpApi(signUpForm);
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.code);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(signUp.pending, state => {
				state.loading = true;
			})
			.addCase(signUp.fulfilled, (state, action: PayloadAction<AuthState>) => {
				state.loading = false;
				state.accessToken = action.payload.accessToken;
				state.userData = action.payload.userData;
			})
			.addCase(signUp.rejected, (state, action: PayloadAction<string>) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default authSlice.reducer;
