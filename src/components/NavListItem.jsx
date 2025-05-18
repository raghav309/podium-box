import { Link } from 'react-router-dom';

function NavListItem({ label, url, children }) {
    return (
        <li className="xl:w-full">
            <Link
                className="NavList-item p-2 flex items-center gap-4 no-underline text-black rounded-md hover:bg-[#c7c7c7] hover:cursor-pointer"
                to={url}
            >
                {children}
                <p className="hidden xl:block">{label}</p>
            </Link>
        </li>
    );
}

export default NavListItem;
