import { useState } from "react";
import bg from "../../../../../images/python.png";
import "./EmailBrowser.style.css";
import { router } from "@inertiajs/react";

const EmailBrowser = ({
    value,
    showOrHide,
    closeWindow,
    openGoogleHandler,
    user,
    showFeedBack
}) => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const toggleShowMoreDetails = () => {
        setShowMoreDetails(!showMoreDetails);
    };

    const sendResponse = (response) => {
        console.log(response);

        router.post("/game/response", {
            id: value.email_id,
            response,
        });

        closeWindow();
        if(value.isSafe === response ){

            showFeedBack(true);
        }else{
            showFeedBack(false);
        }
    };

    return (
        <>
            <div
                className={`browser-page flex flex-col p-2 ${
                    showOrHide === "email" ? "" : "hide-monitor"
                }`}
            >
                <div className="browser-top-bar ">
                    <div className="browser-logo">
                        <img src={bg} alt="" />
                    </div>
                    <div className="browser-top-title">{value.title}</div>
                    <button className="close-btn" onClick={closeWindow}>
                        X
                    </button>
                </div>
                <div className="browser-link-section"></div>

                <div className="browser-content-section flex-grow ">
                    <div>
                        <span className="email-author">{value.author}</span>{" "}
                        <span>
                            {" "}
                            {"<"}
                            {value.mailedfrom}
                            {">"}{" "}
                        </span>
                    </div>

                    <div className="relative">
                        <span className="to-me">to me</span>
                        <button
                            className="show-more-details-btn"
                            onClick={toggleShowMoreDetails}
                        >
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <div
                            className={` ${
                                showMoreDetails ? "show" : "hidden"
                            } absolute show-more-details`}
                        >
                            <p> from: {value.mailedfrom} </p>
                            <p> to: {user.name} </p>
                            <p> date: {value.dateNow} </p>
                            <p> mailed-by: {value.mailedby} </p>
                            <p> signed-by: {value.signedby} </p>
                            <p>
                                {" "}
                                security: Standard encryption (TLS) Learn more{" "}
                            </p>
                        </div>
                    </div>

                    <div className="display-linebreak">
                        {value.content}

                        {value.goto && (
                            <span
                                className="goto-link"
                                onClick={openGoogleHandler}
                            >
                                {value.goto}
                            </span>
                        )}

                        <br />
                        <br />
                        {value.conclusion}

                        {value.response !== null ? (
                            ""
                        ) : (
                            <div className=" text-center">
                                <button
                                    className="ok-button"
                                    onClick={() => sendResponse(1)}
                                >
                                    Accept
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={() => sendResponse(0)}
                                >
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailBrowser;
