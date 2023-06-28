import { router } from "@inertiajs/react";

import './warningIcon.style.css';

const WarningIcon = ({ warningIcon, setWarningIcon, currentMonitor }) => {
    const { show, clickable, safty } = warningIcon;

    const setCorrectIcon = () => {
        if (clickable) {
            if (safty === "safe") {
                return <i className="fa-solid fa-circle-check"></i>;
            } else if (safty === "not-safe") {
                return <i className="fa-solid fa-ban"></i>;
            } else {
                return <i className="fa-solid fa-circle-info"></i>;
            }
        } else {
            return <i className="fa-solid fa-circle-info"></i>;
        }
    };

    const disableWarning = () => {
        if (clickable) {
            console.log("clicked");
            setWarningIcon({...warningIcon , safty: currentMonitor.isSafe?'safe':'not-safe'  })
            if(currentMonitor.helpUsed === 0){
                console.log('help used');
                router.post("/game/helpUsed", {
                    id: currentMonitor.email_id,
                });
            }
        }
        return null;
    };

    return (
        <div
            className={`warning-icon ${show ? "" : "hide-icon"} ${
                clickable ? safty : "disabled"
            } `}
        >
            <button
                className={clickable ? "" : "not-clickable"}
                onClick={disableWarning}
            >
                {setCorrectIcon()}
            </button>
        </div>
    );
};

export default WarningIcon;
