import EpisodeList from './EpisodeList'

function MainSection() {
    return (
        <section className="MainSection">
            <div className="MainTab">
                <h1 className="MainTab-title">Trending:</h1>
                <EpisodeList />
            </div>
        </section>
    )
}

export default MainSection
