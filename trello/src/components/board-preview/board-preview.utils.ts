import { IBoard } from '../../redux/data-types/board';

const generateStyle = (board: IBoard) => {
  const url = board?.prefs?.backgroundImages[2];

  return board?.prefs?.backgroundImages.length !== 0
    ? {
        backgroundImage: `url(${url})`,
      }
    : { backgroundColor: board?.prefs?.backgroundColor };
};
export default generateStyle;
