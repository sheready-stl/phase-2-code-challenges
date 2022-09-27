import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ mySpartans, action }) {
  //your bot army code here...
  const myArmy = mySpartans.map(bot => {
    return <BotCard key={bot.id} bot={bot} action={action} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {myArmy}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
