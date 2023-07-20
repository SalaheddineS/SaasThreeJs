import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import UserModel from '../../Models/User';
import dotenv from 'dotenv';
dotenv.config();

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JWTStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await UserModel.findOne({uuid: payload.uuid});
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
}
));

export default passport;








