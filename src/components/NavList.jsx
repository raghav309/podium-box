import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { Link } from 'react-router-dom'

/*
    this is all the options avilabe in icons 
        <PlaylistPlayOutlinedIcon sx={{ fontSize: 40 }} />
*/

function NavList() {
    return (
        <ul className="NavList">
            <li>
                <Link
                    className="NavList-item"
                    to="/trending"
                >
                    <WhatshotOutlinedIcon sx={{ fontSize: 32 }} />
                    <p>Trending</p>
                </Link>
            </li>
            <li>
                <Link
                    className="NavList-item"
                    to="/inbox"
                >
                    <FileDownloadOutlinedIcon sx={{ fontSize: 32 }} />
                    <p>Inbox</p>
                </Link>
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
