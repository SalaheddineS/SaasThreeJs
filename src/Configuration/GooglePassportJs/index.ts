import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();

const googleOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID as string ,
  clientSecret: process.env.GOOGLE_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
};


passport.use(
  new GoogleStrategy(googleOptions, (accessToken, refreshToken, profile, done) => {

    return done(null, profile);
  })
);

export default passport;
