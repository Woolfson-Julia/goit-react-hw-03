import css from "./Options.module.css";
export default function Options({ onUpdate, totalFeedback, droppingState }) {
  const handleReset = () => {
    droppingState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className={css.container}>
      <button className={css.buttonOptions} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.buttonOptions} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.buttonOptions} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button className={css.buttonReset} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}
