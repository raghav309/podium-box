import { Outlet } from 'react-router-dom'

function MainSection() {
    return (
        <section className="MainSection">
            <Outlet />
        </section>
    )
}

export default MainSection
