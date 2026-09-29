export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: "customer" | "admin";
}

export interface AuthUser {
  username: string;
  password: string;
}
