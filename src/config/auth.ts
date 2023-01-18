export const auth = {
    client_secret_token: `${process.env.JWT_CLIENT_SECRET_TOKEN}`,
    deliveryman_secret_token: `${process.env.JWT_DELIVERYMAN_SECRET_TOKEN}`,

    expires_in_token: "1d",
};
