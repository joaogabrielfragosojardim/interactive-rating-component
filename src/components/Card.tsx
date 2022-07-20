import { useState } from "react";
import { Buttons } from "./Buttons";
import { ThankYou } from "./ThankYou";

export interface IData {
  content: number;
  active: boolean;
}

export const Card = () => {
  const [data, setData] = useState<IData[]>([]);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState({});

  const message = () => {
    const activeItem = data.find((item) => item.active);
    if (activeItem) {
      setActive(activeItem.content);
      setToggle(true);
    }
  };

  if (toggle) {
    return (
      <div className="card cardThanks">
        <ThankYou />
        <div className="thanksText">{`You selected ${active} out of 5`}</div>
        <span>Thank you!</span>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <div></div>
      <span>How did we do?</span>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Buttons number={5} setData={setData} data={data} />
      <button onClick={message}>SUBMIT</button>
    </div>
  );
};
