import { Outlet } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

function MainSection() {
    return (
        <main className="h-full w-auto relative order-1 overflow-hidden md:h-auto md:w-full">
            <div id="tab" className="h-full max-w-2xl mx-auto my-0 px-4 relative overflow-y-auto">
                <Outlet />
            </div>
            <AudioPlayer />
        </main>
    );
}

export default MainSection;
