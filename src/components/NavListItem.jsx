import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { activateTab, getActiveTab } from '../state/uiSlice';

function NavListItem({ label, url, onClick, children }) {
    const styleActive = useSelector(getActiveTab) === label ? 'bg-gray-400' : '';
    const dispatch = useDispatch();
    const onClickListItem = (event) => {
        event.stopPropagation();
        dispatch(activateTab(label));
    };

    return (
        <li className="xl:w-full">
            <Link
                className={`NavList-item p-2 flex items-center gap-4 no-underline text-black rounded-md hover:bg-gray-300 hover:cursor-pointer ${styleActive}`}
                to={url}
                onClick={onClickListItem}
            >
                {children}
                <p className="hidden xl:block">{label}</p>
            </Link>
        </li>
    );
}

export default NavListItem;
