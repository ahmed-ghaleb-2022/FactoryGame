import { useState, useEffect } from "react";
import WebBrowser from "../components/Monitor/WebBrowser";
import EmailBrowser from "../components/Monitor/EmailBrowser";
import WarningIcon from "../components/warningIcon/warningIcon.component";
import Navbar from "../components/Navbar/Navbar";
import readerIcon from "../../../../images/readericon.png";
import factoryImg from "../../../../images/factory.gif";
import SidetabContainer from "../components/Sidetabs/Sidetabs.container";
import MyNoteBook from "../components/Mynotebook/MyNoteBook";
import "../../../../css/style.css";
import { router } from "@inertiajs/react";
import Guidance from "../components/Monitor/Guidance/Guidance.component";

//import Oemails from '../components/data/emails';

const MainPage = ({  Emails, listOfAllEmailsId, listOfEmailsId, balance, companies }) => {
    const [intervalId, setIntervalId] = useState(null);
    const AllEmailsId = listOfAllEmailsId;
    const EmailsUserAlreadyHas = listOfEmailsId;

    const getRandomEmail = () => {
        if (EmailsUserAlreadyHas.length === AllEmailsId.length) {
            console.log("done");
            return;
        }
        let randomEmail;

        do {
            randomEmail =
                AllEmailsId[Math.floor(Math.random() * AllEmailsId.length)];
        } while (EmailsUserAlreadyHas.includes(randomEmail));

        let countEmailsIhave = EmailsUserAlreadyHas.length + 1;
        console.log("add", countEmailsIhave);
        router.post("/game/addNew", {
            randomEmail,
            countEmailsIhave,
        });

        EmailsUserAlreadyHas.push(randomEmail);
    };

    useEffect(() => {
        // Start the interval when the component mounts
        const id = setInterval(() => {
            getRandomEmail();
        }, 3000);

        // Store the interval ID in state
        setIntervalId(id);
        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    const stopInterval = () => {
        clearInterval(intervalId);
        console.log("Interval stopped");
    };

    /************************* Variables ********************************/

    const [allEmails, setAllEmails] = useState(Emails);
    const [currentBrowser, setCurrentBrowser] = useState("none"); // email web guide ''
    const [currentMonitor, setCurrentMonitor] = useState({
        id: 1,
        show: false,
        title: "title",
        link: "https://",
        author: "Ali",
        email: "<test@test.com>",
        content: `Dear Students, 
        we are uploading this week's recording right now. The audio quality is not that great, we will try to fix that until next week. We are still providing the videos for all those students who could not attend the first lectures.
        Best regards,
        Benjamin
        --
            This E-mail is a copy of a system message that has been sent in Stud.IP from Prof. Dr. Benjamin Leiding (benjamin.leiding@tu-clausthal.de) to Ahmed Tareq Ali Ghaleb (ahmed.tareq.ali.ghaleb@tu-clausthal.de).You can reach Stud.IP via `,
        goto: "https://www.goto.com/",
        isSafe: null,
    });
    const [warningIcon, setWarningIcon] = useState({
        show: false, //false
        clickable: false, // false
        safty: "unknown", // safe not-safe unknown
    });

    /************************* Methods ********************************/

    const setTheCurrentEmail = (item, value) => {
        
        setWarningIcon({
            ...warningIcon,
            show: true,
            clickable: true,
            safty: "unknown",
        });
        setCurrentMonitor(
            ...allEmails.filter((email) => email.email_id === item.email_id)
        );
        setCurrentBrowser(value);
        router.post("/game/unread", {
            id: item.email_id,
        });
    };

    useEffect(() => {
        setAllEmails(Emails);
    }, [Emails]);

    const showGuidanceWindow = () => {
        setCurrentBrowser("guide");
    };

    const openGoogleHandler = () => {
        if (currentMonitor.response !== null) {
            return;
        }
        setCurrentBrowser("web");
    };
    const backToEmail = () => {
        setCurrentBrowser("email");
    };

    const closeWindow = () => {
        setCurrentBrowser("none");
        setWarningIcon({
            show: false,
            clickable: false,
            safty: "unknown",
        });
    };

    

    return (
        <>

            <Navbar  balance={balance} />

            <div className="backgroud-page relative">
                <div className="Main-Content flex">
                    <SidetabContainer
                        allEmails={allEmails}
                        setTheCurrentEmail={setTheCurrentEmail}
                    />

                    <div className="Monitor  w-full">
                        <EmailBrowser
                            openGoogleHandler={openGoogleHandler}
                            showOrHide={currentBrowser}
                            closeWindow={closeWindow}
                            value={currentMonitor}
                        />
                        <WebBrowser
                            backToEmail={backToEmail}
                            showOrHide={currentBrowser}
                            closeWindow={closeWindow}
                            value={currentMonitor}
                        />
                        <Guidance
                            showOrHide={currentBrowser}
                            closeWindow={closeWindow}
                        />
                    </div>

                    <div className="reader-icon" onClick={showGuidanceWindow}>
                        <img src={readerIcon} alt="" />
                    </div>
                    
                    
                    <WarningIcon
                        warningIcon={warningIcon}
                        setWarningIcon={setWarningIcon}
                        currentMonitor={currentMonitor}
                    />


                    <MyNoteBook companies={companies} />
                </div>
            </div>
           
        </>
    );
};

export default MainPage;
