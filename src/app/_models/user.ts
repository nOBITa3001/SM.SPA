export interface User {
  id: number;
  username: string;
  AvatarUrl: string;
  created?: Date;
  edited?: Date;
  lastActive: Date;
}
