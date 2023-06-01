import React, {useState} from 'react';
import './HostPage.css';

const text = `As Jesus was leaving Jericho with his disciples and a sizable crowd,
Bartimaeus, a blind man, the son of Timaeus,
sat by the roadside begging.
On hearing that it was Jesus of Nazareth,
he began to cry out and say,
“Jesus, son of David, have pity on me.”
And many rebuked him, telling him to be silent.
But he kept calling out all the more, “Son of David, have pity on me.”
Jesus stopped and said, “Call him.”
So they called the blind man, saying to him,
“Take courage; get up, Jesus is calling you.”
He threw aside his cloak, sprang up, and came to Jesus.
Jesus said to him in reply, “What do you want me to do for you?”
The blind man replied to him, “Master, I want to see.”
Jesus told him, ‘Go your way; your faith has saved you.”
Immediately he received his sight
and followed him on the way.`;



const fetchAndExtractText = async (url) => {
    try {
      const response = await fetch(url);
      const htmlContent = await response.text();
  
      // Log the extracted text
      console.log(htmlContent);
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  };
  
  // Usage
  const websiteUrl = 'https://evangeli.net/gospel';
  fetchAndExtractText(websiteUrl)
    .catch(error => {
      console.error('Error:', error.message);
    });
  










const paragraphs = text.split('\n').map((line, index) => ( //Understand how to edit this and other html
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
));

const currentDate = () => {
    const DayValue = new Date();
    return (
        <React.Fragment>
            {DayValue.getMonth() + 1}/{DayValue.getDate()}/{DayValue.getFullYear()}
        </React.Fragment>
    );
};

function DisplayContent() {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const textClass = isToggled ? 'white-text' : 'black-text';
    const bgClass = isToggled ? 'header-block' : 'white-header-block';

    return (
        <div class="container">
            <label class="switch">
                <input type="checkbox" onChange={handleToggle}></input>
                <span class="slider round"></span>
            </label>
            <div id={bgClass}>
                <h3 className={textClass} >Learning Apostle</h3>
                <hr id="h-line" />
                <p id="lec-text" className={textClass}>Gospel of {currentDate()}<br/><br/>Mk 10:46-52</p>
                <p id="text-comp" className={textClass}>{paragraphs}</p>
            </div>
        </div>
    );

}
export default DisplayContent;