export interface IBoard {
  id?: string;
  name?: string;
  closed?: boolean;
  idOrganization?: string;
  prefs?: IPrefs;
}

export interface IPrefs {
  background?: string;
  backgroundColor?: string;
  backgroundBottomColor?: string;
  backgroundBrightness?: string;
  backgroundImageScaled?: IBackgroundImageScaled[];
  backgroundImages: string[];
  backgroundTile?: boolean;
  backgroundTopColor?: string;
  calendarFeedEnabled?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canBePublic?: boolean;
  canInvite?: boolean;
  cardAging?: string;
  cardCovers?: boolean;
  comments?: string;
  hideVotes?: boolean;
  invitations?: string;
  isTemplate?: boolean;
  permissionLevel?: string;
  selfJoin?: boolean;
  voting?: string;
}

export interface IBackgroundImageScaled {
  height?: number;
  url: string;
  width?: number;
}
