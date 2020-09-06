import React from 'react';
import SidebarRow from "./SidebarRow"
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import "./Sidebar.css"
import {useStateValue} from "./StateProvider"



const Sidebar = (props) => {
     const [{user}, dispatch] = useStateValue()

  return (
    <div className = "sidebar">
    	<SidebarRow src={user.photoURL} title={user.displayName} />
    	<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information center" />
    	<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
    	<SidebarRow Icon={ChatIcon} title="Friends" />
    	<SidebarRow Icon={PeopleIcon} title="Messanger" />
    	<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
    	<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
    	<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
    	<SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />

    </div>	
  )
}

export default Sidebar;