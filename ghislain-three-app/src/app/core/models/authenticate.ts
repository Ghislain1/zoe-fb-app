import { Foto } from "./foto";

/**
 * Authenticate model
 * Basically mimics the UserSerializer in the API.
 */

export interface Authenticate {
  name?: string;
  email: string;
  password: string;
}
