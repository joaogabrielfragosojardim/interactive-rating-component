import { IData } from "./Card";

export interface IButton {
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  content: number;
  active: boolean;
  data: IData[];
}

export const SingleButton = ({ content, active, setData, data }: IButton) => {
  const changeActives = () => {
    const activeButton = data.findIndex((btn) => btn.active);
    const change = data.map((item) => ({ ...item, active: false }));

    if (activeButton !== content - 1) {
      change[content - 1] = { content, active: true };
    }
    setData(change);
  };
  return (
    <span
      className={`buttonsRating ${active && "active"}`}
      onClick={changeActives}
    >
      {content}
    </span>
  );
};
