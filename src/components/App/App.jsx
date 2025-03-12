import { useState, useEffect } from "react";
import css from "./App.module.css"
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification  from "../Notification/Notification";

export default function App() {
  const [countClicks, setcountClicks] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });
  
  const totalFeedback = countClicks.good + countClicks.neutral + countClicks.bad;
  const positiveFeedback = Math.round((countClicks.good / totalFeedback) * 100);
  
  const updateFeedback = (feedbackType) => {
          setcountClicks({
            ...countClicks,
            [feedbackType]: countClicks[feedbackType] + 1,
          });
  };
  
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(countClicks));
  }, [countClicks]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        droppingState={setcountClicks}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          count={countClicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
