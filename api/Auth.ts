import { app } from './firebase';
import { SignUpForm } from '../types/SignUpForm.d';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { child, getDatabase, ref, set } from 'firebase/database';
import { FirebaseError } from 'firebase/app';

export const signUp = async (signUpForm: SignUpForm) => {
	try {
		const auth = getAuth(app);
		const res = await createUserWithEmailAndPassword(
			auth,
			signUpForm.email,
			signUpForm.password
		);
		const user = res.user;
		const { uid } = user;
		const accessToken = await user.getIdToken();
		const userData = await createUser({ signUpForm, uid });
		return { accessToken, userData };
	} catch (error) {
		if (error instanceof FirebaseError) {
			throw error.code;
		}
		throw error;
	}
};

export type createUserProps = {
	signUpForm: SignUpForm;
	uid: string;
};

export const createUser = async ({ signUpForm, uid }: createUserProps) => {
	try {
		const { firstName, lastName, email } = signUpForm;
		const firstLast = `${firstName} ${lastName}`;
		const userData = {
			uid,
			firstName,
			lastName,
			firstLast,
			email,
			createdAt: new Date().toISOString(),
		};
		const dbRef = ref(await getDatabase());
		const childRef = child(dbRef, `users/${uid}`);
		await set(childRef, userData);
		return userData;
	} catch (error) {
		if (error instanceof FirebaseError) {
			throw error.code;
		}
		throw error;
	}
};
