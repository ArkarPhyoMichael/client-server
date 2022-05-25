import { compareSync, hashSync } from "bcrypt";

export const hashedPassword = (password: string): string => {
  const hashPassword = hashSync(password, 12);
  return hashPassword;
};

export const comparedPassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const comparePassword = compareSync(password, hashedPassword);
  return comparePassword;
};
