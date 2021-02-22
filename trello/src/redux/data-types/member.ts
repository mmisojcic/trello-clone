import { IBoard } from './board';

export interface IMember {
  id?: string;
  avatarHash?: string;
  avatarUrl?: string;
  //   avatarSource?: any;
  bio?: string;
  boards?: IBoard[];
  confirmed?: boolean;
  email?: string | null;
  fullName?: string;
  //   gravatarHash?: any;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  idPremOrgsAdmin?: string[];
  initials?: string;
  //   loginTypes?: any;
  //   memberType?: any;
  oneTimeMessagesDismissed?: string[] | null;
  //   prefs?: object;
  products?: number[];
  uploadedAvatarHash?: string | null;
  uploadedAvatarUrl?: string | null;
  url?: string;
  username?: string;
}
