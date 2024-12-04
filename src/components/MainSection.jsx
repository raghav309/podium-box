import { Outlet } from 'react-router-dom'
import AudioPlayer from './AudioPlayer'

function MainSection() {
    return (
        <section className="MainSection">
            <div className="Tab">
                <Outlet />
            </div>
            <AudioPlayer />
        </section>
    )
}

export default MainSection
