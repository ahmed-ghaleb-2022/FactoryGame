import { Link, Head } from "@inertiajs/react";
import "./leaderboard.style.css";

const LeaderBoard = ({ users }) => {

   users.sort((a, b) => b.balance - a.balance);

const back =()=> {
    window.history.back();
  }
    return (
        <>
        <Head title="LeaderBoard" />
        <div className="leaderboard-page-container">
            <div className='gradient' />
            <Link onClick={back} className="back-btn">
            <i className="fa-solid fa-circle-chevron-left"></i> Back
            </Link>
        <div className="leaderboard-container">
            <h1 className="leaderboard-heading orange_gradient">Leader board</h1>

            <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Player Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                balance
                            </th>
                            <th scope="col" className="px-6 py-3">
                                number of Emails
                            </th>
                            <th scope="col" className="px-6 py-3">
                                number of correct decisions
                            </th>
                            <th scope="col" className="px-6 py-3">
                                number of wrong decisions
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            {users.map((player, index) =>(
                        <tr  key={index} className ={`${index % 2 === 0 ? 'bg-white border-b  '  : 'border-b bg-gray-50  '}`}>
                                
                                <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                {index+1}
                            </th>
                                <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                {player.name}
                            </th>
                            <td className="px-6 py-4">$ {player.balance}</td>
                            <td className="px-6 py-4">{player.emailsIhave}</td>
                            <td className="px-6 py-4">{player.correctdecisions}</td>
                            <td className="px-6 py-4">{player.wrongdecisions}</td>
                            
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
        </>
    );
};

export default LeaderBoard;
