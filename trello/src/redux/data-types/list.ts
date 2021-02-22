export interface IList {
  id: string;
  name: string;
  closed: boolean;
  idBoard: string;
  pos: number;
  subscribed: boolean;
  cards: ICard[];
}

export interface ICard {
  id: string;
  //   badges: object;
  //   checkItemStates: any[];
  closed?: boolean;
  dateLastActivity?: Date;
  desc: string;
  //   descData: object ;
  due?: Date;
  email?: string;
  idAttachmentCover?: string;
  idBoard?: string;
  idChecklists?: string[];
  idLabels?: string[];
  idList: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  //   labels: ILabel[];
  manualCoverAttachment?: boolean;
  name: string;
  pos: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
}

export enum LabelColor {
  Black = 'black',
  Blue = 'blue',
  Green = 'green',
  Lime = 'lime',
  Null = 'null',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Sky = 'sky',
  Yellow = 'yellow',
}
export interface ILabel {
  id: string;
  idBoard: string;
  name: string;
  color: LabelColor;
  uses: number;
}
