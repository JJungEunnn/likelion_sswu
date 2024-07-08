import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "멋쟁이 사자처럼",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 플레이어",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "두산 베어스",
        icon: <CiBullhorn />,
        src: "/webd"
    },
    {
        title: "2024 올스타",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "portfolio",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "youtube clone",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "likelion",
        src: "/search/likelion"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/JJungEunnn",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/zyozee_suriii/?hl=ko",
        icon: <AiOutlineInstagram />
    },
]