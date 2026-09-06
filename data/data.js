import shazamifyImage from '../public/shazamify.png'
import stocksImage from '../public/stocks.png'
import excelImage from '../public/excel.png'
import vetchatImage from '../public/vetChat.png'
import propelloImage from '../public/propello_logo.png'
import tracklifyImage from '../public/tracklify_logo.png'


export const data = [
    {
        id: 1,
        name: "ViewVault",
        image: tracklifyImage,
        github: "https://github.com/AneeshSharma9/ViewVault",
        live: "https://viewvault.netlify.app/",
        description: "Easily maintained watchlists for movies and TV shows",
        tech: ["React", "Firebase", "TMDB API", "Bootstrap", "JavaScript"],
    },
    {
        id: 2,
        name: "Propello",
        image: propelloImage,
        github: "https://github.com/AneeshSharma9/propello",
        live: "https://propello.netlify.app/",
        description: "Affordable software development for small businesses from university students",
        tech: ["React", "AWS Cognito", "AWS Lambda", "DynamoDB", "PayPal API", "Bootstrap"],
    },
    {
        id: 3,
        name: "Shazamify",
        image: shazamifyImage,
        github: "https://github.com/AneeshSharma9/Shazamify",
        live: "",
        description: "Identify a song from the microphone and add it to a Spotify playlist",
        tech: ["Python", "ShazamAPI", "Spotify API", "Tkinter", "PyAudio"],
    },
    {
        id: 4,
        name: "Stock Dashboard",
        image: stocksImage,
        github: "https://github.com/AneeshSharma9/stock-dashboard",
        live: "",
        description: "Track up to six ticker symbols and view their prices and history",
        tech: ["Python", "Flask", "Dash", "Plotly", "yfinance API", "Pandas"],
    },
    {
        id: 5,
        name: "Web Excel",
        image: excelImage,
        github: "https://github.com/AneeshSharma9/WebExcel",
        live: "https://webexcel.netlify.app/",
        description: "Full-featured spreadsheet app in the browser with import/export",
        tech: ["JavaScript", "AngularJS", "ag-Grid", "SheetJS", "Netlify"],
    },
    {
        id: 6,
        name: "Vet Chat",
        image: vetchatImage,
        github: "https://github.com/AneeshSharma9/vet-chat",
        live: "",
        description: "Quick-access messaging app connecting pet owners to veterinarians",
        tech: ["React", "Stream Chat API", "JavaScript", "Netlify", "Heroku"],
    },


]
