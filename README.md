# ZOZANATION

This simple React app dispays the information of a well-known Kenyan hiphop/drill crew called Wakadinali.
It displays the name, image, a breif description etc.

## Prequisites

Clone the project to your local directory .
Install and run the necessary npm commands :
    -npm install
    -npm start
Then enable json-server :
    -json-server --w ./src/database/db.json

### Deliverables

Once the necessary installations are successful, a new tab will open on your browser and will display Wakadinali's information.

### Behind The Scenes
I updated the db.json file and added the necessary information 
    {
    "wakadinali": [
        {
            "name": "Domani Munga",
            "image": "https://biggestkaka.co.ke/wp-content/uploads/2021/09/DOmani-Munga-od0gja5h.jpg",
            "description": "Domani Munga, real name David Munga Ramadhan. His nicknames are Wuzu, Dochman Mwizi, and Doche. Domani is a lyricist and has mastered the game ever since he came out. Fans applaud him for his catchy hooks and choruses, which are relatable in modern society. Indeed, Wakadinali is not Wakadinali without Domani Munga.",
            "dob": "1995",
            "dod": "Alive"
        },
        {
            "name": "Sewer Sydaa",
            "image": "https://biggestkaka.co.ke/wp-content/uploads/2021/11/Sewersydaa-agyxNma0.jpg",
            "description": "Sewersydaa, also known as Man a Driller(real name Salim Ali Tangut), started off as an editor and DOP before joining Wakadinali as an artist. He is best known for his edits under the name Slim Visuals. He directed and edited several Wakadinali music videos before Wakadinali even became famous. One of his most notable projects is Wakadinali’s “Morio Anzenza” music video, featuring Dyana Cods.",
            "dob": "1995",
            "dod": "Alive"
        },
        {
            "name": "Scar Mkadinai",
            "image": "https://biggestkaka.co.ke/wp-content/uploads/2022/01/Scar-Mkadinali-RbeVVolm.jpg",
            "description": "Scar Mkadinali, real name Churchill Mandela, is a member of Wakadinali, together with Domani Munga, they co-founded the group name Wakadinali and their record label, Zoza Nation, also known as Rong Rende. Scar Mkadinali is best known for his 2019 solo project “Kovu,” which is one of the most remixed Kenyan songs of all time. The “Kovu” instrumental also helped Mbogi Genje establish their musical career with their song “Kidungi“.",
            "dob": "1995",
            "dod": "Alive"
        }
    ],
    }

Then in the App.jsx file, I commented out kapenguria-six and culture endpoints and added the wakadinali end point.


## Author
marcus