import {FaPoll,FaRocket,FaHome,FaLaptopCode,FaAddressCard,FaSignInAlt} from "react-icons/fa"
export let MenuItems=[
    {
        title: "Home",
        url: "/",
        cName:"nav-links",
        icon:<FaHome/>
    },
    {
        title: "LeaderBoard",
        url: "/leaderboard",
        cName:"nav-links",
        icon:<FaPoll/>
    },
    {
        title: "CodeX Editor",
        url: "/editor",
        cName:"nav-links",
        icon:<FaLaptopCode/>
    },
    {
        title: "AboutUs",
        url: "/aboutus",
        cName:"nav-links",
        icon:<FaRocket  />
    },{
        title:"Login/SignUp",
        url: "/signup",
        cName:"nav-links",
        icon:<FaSignInAlt/>
        
    }

]
export default MenuItems