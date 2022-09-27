import React from "react";
import BotCard from "./BotCard";

function BotCollection({ warriors, action }) {
  // Your code here
  const myCollection = warriors.map(bot => {
    return <BotCard key={bot.id} bot={bot} action={action} />
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {myCollection}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
