import Bcrypt from 'bcrypt';

export const VerifyPassword = async (password: string, hash: string) => {
    return await Bcrypt.compare(password, hash);
}

