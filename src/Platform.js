import React from 'react';
import './PlatformStyle.css';

function readContentFromSite() 
{
    fetch('https://www.catholic.org/bible/daily_reading/')
    .then(response => response.text())
    .then(data => {
        // `data` contains the text content of the website
        console.log(data);
    })
    .catch(error => {
        //alert("Content Couldn't Loaded\nTry Reloading the Page :)")
        console.error(error);
    });
}

function initPage() 
{
    readContentFromSite()
    return( 
        <div class="main-container">
            <h1 class="title-comp">Gospel of the Day</h1>
            <hr class="horizontal-line"></hr>

            <p class="center-block" >
                Mary set out <br />
                and traveled to the hill country in haste<br />
                to a town of Judah,<br />
                where she entered the house of Zechariah<br />
                and greeted Elizabeth.<br />
                When Elizabeth heard Mary's greeting,<br />
                the infant leaped in her womb,<br />
                and Elizabeth, filled with the Holy Spirit,<br />
                cried out in a loud voice and said,<br />
                "Most blessed are you among women,<br />
                and blessed is the fruit of your womb.<br />
                And how does this happen to me,<br />
                that the mother of my Lord should come to me?<br />
                For at the moment the sound of your greeting reached my ears,<br />
                the infant in my womb leaped for joy.<br />
                Blessed are you who believed<br />
                that what was spoken to you by the Lord<br />
                would be fulfilled."<br />
                <br />
                And Mary said:<br />
                <br />
                "My soul proclaims the greatness of the Lord;<br />
                my spirit rejoices in God my Savior,<br />
                for he has looked with favor on his lowly servant.<br />
                From this day all generations will call me blessed:<br />
                the Almighty has done great things for me,<br />
                and holy is his Name.<br />
                <br />
                He has mercy on those who fear him<br />
                in every generation.<br />
                He has shown the strength of his arm,<br />
                he has scattered the proud in their conceit.<br />
                He has cast down the mighty from their thrones,<br />
                and has lifted up the lowly.<br />
                He has filled the hungry with good things,<br />
                and the rich he has sent away empty.<br />
                He has come to the help of his servant Israel<br />
                for he has remembered his promise of mercy,<br />
                the promise he made to our fathers,<br />
                to Abraham and his children for ever."<br />
                <br />
                Mary remained with her about three months<br />
                and then returned to her home. <br />
            </p>
            <hr class="horizontal-line"></hr>
            <br />
        </div>
    );
}

export default initPage;
