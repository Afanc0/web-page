import React from 'react';
import { Outlet, Link } from "react-router-dom";

const ReadingOne = () => {
  return (
    <div>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        </div>
      <Outlet />

      <h1>Lectionary: 353</h1>
      <p>
        Reading 1 <br/>
        Tb 1:3; 2:1a-8 <br/>
      </p>
      <p style={{"marginLeft":"5vh"}}>
        I, Tobit, have walked all the days of my life <br/>
        on the paths of truth and righteousness. <br/>
        I performed many charitable works for my kinsmen and my people <br/>
        who had been deported with me to Nineveh, in Assyria. <br/> <br/>

        On our festival of Pentecost, the feast of Weeks, <br/>
        a fine dinner was prepared for me, and I reclined to eat. <br/>
        The table was set for me, <br/>
        and when many different dishes were placed before me, <br/>
        I said to my son Tobiah: "My son, <br/> 
        go out and try to find a poor man <br/>
        from among our kinsmen exiled here in Nineveh. <br/>
        If he is a sincere worshiper of God, bring him back with you, <br/>
        so that he can share this meal with me. <br/>
        Indeed, son, I shall wait for you to come back." <br/>

        Tobiah went out to look for some poor kinsman of ours. <br/>
        When he returned he exclaimed, "Father!" <br/>
        I said to him, "What is it, son?" <br/>
        He answered, "Father, one of our people has been murdered! <br/>
        His body lies in the market place where he was just strangled!" <br/>
        I sprang to my feet, leaving the dinner untouched; <br/>
        and I carried the dead man from the street <br/>
        and put him in one of the rooms, <br/>
        so that I might bury him after sunset. <br/>
        Returning to my own quarters, I washed myself <br/>
        and ate my food in sorrow. <br/> 
        I was reminded of the oracle <br/>
        pronounced by the prophet Amos against Bethel: <br/><br/>

        "All your festivals shall be turned into mourning, <br/>
        and all your songs into lamentation." <br/> <br/>

        And I wept. <br/>
        Then at sunset I went out, dug a grave, and buried him. <br/> <br/>

        The neighbors mocked me, saying to one another: <br/>
        "He is still not afraid! <br/>
        Once before he was hunted down for execution <br/>
        because of this very thing; <br/>
        yet now that he has scarcely escaped, <br/>
        here he is again burying the dead!" <br/>
      </p>
    </div>
  );
};

export default ReadingOne;