import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255, 123, 0)", "rgb(0, 149, 255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Pratheep",
    lastName: "Pararajasingam",
    initials: "{Prad}", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the SriLanka'
        },
        {
            emoji: "💼",
            text: "Software developer"
        },
        {
            emoji: "📧",
            text: "ipradeep.here@gmail.com"
        }
    ],
    socials: [
        {
            link: "tel:+94778480603",
            icon: 'fa fa-phone',
            label: 'Call me'
        },
        {
            link: "https://facebook.com/pradsingam",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/pradpixel",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/pradeepsingam",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/pratheep-pararajasingam-23181262",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Pratheep. I'm a software developer. I enjoy coding, I focus on delivering clean, scalable, and user-friendly solutions that drive results.",
    skills:
        {
            proficientWith: ['javascript', 'react','react-native','github', 'tailwind', 'html5', 'css3'],
            exposedTo: ['nodejs', 'python', 'graphic design']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Assistia",
            live: "https://assistia.lk", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "Web", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Mullainet",
            live: "https://mullainet.com",
            source: "Web",
            image: mock2
        },
        {
            title: "NewlybornUK",
            live: "https://newlybornuk.com",
            source: "Web",
            image: mock3
        },
        {
            title: "Self care - CRM",
            live: "https://play.google.com/store/apps/details?id=com.selfassistia.customer",
            source: "Mobile app",
            image: mock4
        },
        {
            title: "TD News",
            live: "https://play.google.com/store/apps/details?id=com.tamilnews.assistia",
            source: "Mobile app",
            image: mock5
        }
    ]
}
