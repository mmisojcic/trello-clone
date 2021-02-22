export enum ApiPath {
  MEMBERS = 'members',
  BOARDS = 'boards',
  LISTS = 'lists',
  CARDS = 'cards',
}

export const hostURL = 'https://api.trello.com/1/';
export const apiKey = `32d4ffa058c9ba695b7d2406a345d866`;
export const serverToken =
  '2c348426ddb119dba1be6ed8945452ea8619d766457c2246a97ea03a9c547e9c';

export const requiredQueryParams = `key=${apiKey}&token=${serverToken}`;
