import { useEffect } from "react";
import { IData } from "./Card";
import { SingleButton } from "./SingleButton";

export interface IButtons {
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  data: IData[];
  number: number;
}

export const Buttons = ({ number, setData, data }: IButtons) => {
  useEffect(() => {
    let content: IData[] = [];

    for (let i = 1; i <= number; i++) {
      content = [...content, { content: i, active: false }];
    }
    setData(content);
  }, [number, setData]);

  return (
    <div className="buttonsRatingContainer">
      {data.map((item) => (
        <SingleButton
          key={item.content}
          content={item.content}
          active={item.active}
          setData={setData}
          data={data}
        />
      ))}
    </div>
  );
};
