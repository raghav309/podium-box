import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NavListItem from './NavListItem';
/*
    this is all the options avilabe in icons 
        <PlaylistPlayOutlinedIcon sx={{ fontSize: 40 }} />
*/

function NavList() {
    const tab = ['trending', 'inbox', 'subscriptions', 'playlists', 'account'];

    return (
        <ul className="NavList p-2 flex flex-row md:flex-col justify-around items-center xl:items-start list-none">
            <NavListItem label="Trending" url="/trending">
                <WhatshotOutlinedIcon sx={{ fontSize: 32 }} />
            </NavListItem>
            <NavListItem label="Inbox" url="/inbox">
                <FileDownloadOutlinedIcon sx={{ fontSize: 32 }} />
            </NavListItem>
            <NavListItem label="Subscritptions" url="/subscriptions">
                <SubscriptionsOutlinedIcon sx={{ fontSize: 32 }} />
            </NavListItem>
            <NavListItem label="Playlists" url="/playlists">
                <PlaylistPlayOutlinedIcon sx={{ fontSize: 32 }} />
            </NavListItem>
            <NavListItem label="Acconut" url="/account">
                <AccountCircleOutlinedIcon sx={{ fontSize: 32 }} />
            </NavListItem>
        </ul>
    );
}

export default NavList;
