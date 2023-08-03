import "./Feedback.style.css";
const FeedBack = ({ feedbackType }) => {
    return (
        <div className="feedback-container">
            {feedbackType ? (
                <div className="good-feedback">
                    <h2>Well done, good decision</h2>
                </div>
            ) : (
                <div className="bad-feedback">
                    <h2>Unfortunately, wrong decision</h2>
                </div>
            )}
        </div>
    );
};

export default FeedBack;
