import { Outlet } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

function MainSection() {
    return (
        <section className="h-full w-auto relative order-1 overflow-hidden md:h-auto md:w-full bg-[#f1f1f1]">
            <div className="h-full w-fit mx-auto my-0 relative overflow-y-auto">
                <Outlet />
            </div>
            <AudioPlayer />
        </section>
    );
}

export default MainSection;
