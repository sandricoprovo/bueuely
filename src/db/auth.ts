/**
 * NOTES:
 * - add flag to tell what created an access token (IE: auth with creds vs refresh). This is handy for authorizing password changes or payments.
 * Example: https://www.youtube.com/watch?v=mbsmsi7l3r4&t=1344s&ab_channel=WebDevSimplified
 *
 * === CREATE USER FLOW ===
 * - secrets for both access and refresh tokens are created in env file
 * - user moves to sign in page to login in
 * - user enters email and password
 * - while creating user, access and refresh tokens are created
 * - refresh token is stored in DB, while both tokens are sent to client
 *      - access token is created with a set expiration time
 * - when the access token expires, the client sends the refresh token to the server to validate and create a new access token
 * - when a user logs out, the refresh token is deleted from the DB
 */

const authenticate = () => console.log("authenticating...");

export { authenticate };
