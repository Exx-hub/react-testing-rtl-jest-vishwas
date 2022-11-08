export const add = (a: number, b: number) => a + b;

export const formatUserName = (username: string) => {
  return username.startsWith("@") ? username : "@" + username;
};
