import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: 'Nick V',
    company: 'Quick Base',
    location: 'Some Location, USA',
    bio: 'Some bio information',
    avatar_url: 'https://i.imgur.com/jav62p6.jpg',
    email: 'nick@test.com',
  },
  {
    name: 'Bob S',
    company: 'Some Company',
    location: 'Another Location, USA',
    bio: 'Bob bio information',
    avatar_url: 'https://i.imgur.com/TzWcihb.png',
    email: 'bob@test.com',
  },
];

export const USER_LIST = userList;
