import jwt from 'jsonwebtoken';

const generateToken = (uuid: string) => {
    return jwt.sign({ uuid }, process.env.JWT_SECRET as string, { expiresIn: '7d' });
}

export default generateToken;