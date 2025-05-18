import SideSection from './SideSection';
import MainSection from './MainSection';

function Home() {
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row">
            <SideSection />
            <MainSection />
        </div>
    );
}

export default Home;
