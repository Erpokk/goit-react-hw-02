import css from "./Feedback.module.css"

const Feedback = ({ options, total }) => (
    <div className={css.wrapper}>
        {Object.keys(options).map(option => (
            <p key={option}>{option}: {options[option]}</p>
        ))}
        <p>Total: {total()}</p>
        <p>Positive: {Math.round((options.Good / total()) * 100)}%</p>
    </div>
);

export default Feedback;