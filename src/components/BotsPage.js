import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const[{ filteredBots }, setBotData] = useState({ filteredBots: [] });
  const [{ theChosen }, setTheChosen] = useState({ theChosen: {} })
  const [activeViewing, setActiveViewing] = useState(true)
  const [botArmy, setBotArmy] = useState ([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(r => r.json())
    .then(bots => setBotData({ filteredBots: bots }))
  }, []);

  //activeViewing to toggle what to render. The specs or collection
  function displayMyWarrior(bot){
    setTheChosen({theChosen: bot})
    setActiveViewing(false)
  }
  // console.log(theChosen)

  function displayAllWarriors(){
    setActiveViewing(true)
  }

  function addSpartans(bot){
    //The Advanced Deliverable will prevent the alert from running as we dont have the same card to click anymore
    // const newCollection = filteredBots.filter(card => card.bot_class !== bot.bot_class)

    if(botArmy.includes(bot)){
      //Added a nice alert message to let users know they need to choose another bot
      //return null;
      alert("A bot can be selected only once! Please select another");
    }else{
      setBotArmy([...botArmy, bot])
      // setBotData({filteredBots: newCollection})
    }
    setActiveViewing(true)
  }
  // console.log(botArmy)

  function removeFromFam(bot){
    const challengerOut = botArmy.filter(card => card.bot_class !== bot.bot_class)
    const challArr = [...challengerOut]
    setBotArmy(challArr)
  }

  
  return (
    <div>
      <YourBotArmy mySpartans={botArmy} action={removeFromFam} /> 
      {activeViewing === true
      ? <BotCollection warriors={filteredBots} action={displayMyWarrior} /> 
      : <BotSpecs bot={theChosen} enlist={addSpartans} goBack={displayAllWarriors}/>}
    </div>
  )
}

export default BotsPage;
