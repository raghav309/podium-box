import NavList from './NavList';

function SideSection() {
    return (
        <aside className="w-full order-2 border-t border-[#c7c7c7] md:w-auto md:h-full md:order-1 md:border-t-0 md:border-r xl:w-72">
            <NavList />
        </aside>
    );
}

export default SideSection;
