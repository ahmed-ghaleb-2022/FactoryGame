import "./leaderboard.style.css";

const LeaderBoard = ({ users }) => {

   

const userCounts = {};
const extractedData = users.reduce((result, item) => {
  if (!userCounts[item.user_id]) {
    userCounts[item.user_id] = {
      isEqualCount: 0,
      notEqualCount: 0
    };
    result.push({
      user_id: item.user_id,
      name: item.name,
      balance: item.balance,
      emailsIhave: item.emailsIhave,
      isEqualCount: 0,
      notEqualCount: 0
    });
  }

  if (item.isSafe === item.response) {
    userCounts[item.user_id].isEqualCount++;
    result.find(user => user.user_id === item.user_id).isEqualCount++;
  } else if (item.isSafe !== item.response && item.response !== null ) {
    userCounts[item.user_id].notEqualCount++;
    result.find(user => user.user_id === item.user_id).notEqualCount++;
  }

  return result;
}, []);


const sortedArray = extractedData.sort((a, b) => b.balance - a.balance);


    return (
        <>
        
      
        

        
        <div className="leaderboard-container">
            <h1 className="leaderboard-heading">Leaderboard</h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Player Name
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
                            <th scope="col" className="px-6 py-3">
                                balance
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            {sortedArray.map((player, index) =>(
                        <tr  key={index} className ={`${index % 2 === 0 ? 'bg-white border-b dark:bg-gray-900 dark:border-gray-700'  : 'border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'}`}>
                                <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {player.name}
                            </th>
                            <td className="px-6 py-4">{player.emailsIhave}</td>
                            <td className="px-6 py-4">{player.isEqualCount}</td>
                            <td className="px-6 py-4">{player.notEqualCount}</td>
                            <td className="px-6 py-4">{player.balance}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    );
};

export default LeaderBoard;
