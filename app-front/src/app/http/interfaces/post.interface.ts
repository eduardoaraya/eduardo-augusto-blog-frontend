import { IUser } from './user.interface';

export interface PostInterface {
  id?: number;
  url: string;
  shortDescription: string;
  title: string;
  postContent: string;
  createdAt: string | Date;
  user?: IUser;
}

export interface IPostCreateResult {
  success: boolean;
  error: string;
}
