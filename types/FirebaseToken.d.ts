type FirebaseToken = {
	aud: string;
	auth_time: number;
	email: string;
	email_verified: boolean;
	exp: number;
	iat: number;
	iss: string;
	sub: string;
	user_id: string;
	firebase: {
		identities: {
			email: string[];
			sign_in_provider: string;
		};
	};
};

export default FirebaseToken;
