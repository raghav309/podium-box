import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

/*
    this is all the options avilabe in icons 
        <PlaylistPlayOutlinedIcon sx={{ fontSize: 40 }} />
*/

function NavList() {
    return (
        <ul className="NavList">
            <li className="NavList-item">
                <WhatshotOutlinedIcon sx={{ fontSize: 32 }} />
                <p>Trending</p>
            </li>
            <li className="NavList-item">
                <FileDownloadOutlinedIcon sx={{ fontSize: 32 }} />
                <p>Downloads</p>
            </li>
            <li className="NavList-item">
                <SubscriptionsOutlinedIcon sx={{ fontSize: 32 }} />
                <p>Subscriptions</p>
            </li>
            <li className="NavList-item">
                <PlaylistPlayOutlinedIcon sx={{ fontSize: 32 }} />
                <p>Playlists</p>
            </li>
            <li className="NavList-item">
                <AccountCircleOutlinedIcon sx={{ fontSize: 32 }} />
                <p>Account</p>
            </li>
        </ul>
    )
}

export default NavList
