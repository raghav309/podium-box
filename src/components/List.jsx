function PodcastList({ children }) {
    /*
    const feedArr = []
    const [dataStatus, setDataStatus] = useState(false)
    useEffect(() => {
        const fetchEpisodes = async () => {
            const res = await fetch('https://api.podcastindex.org/api/1.0/podcasts/trending?pretty')
            const resJson = await res.json()
            
            if (res.ok) {
                feedArr = resJson.feeds
                setDataStatus(true)
            }
        }
    })
    */

    return <div className="mb-32">{children}</div>;
}

export default PodcastList;
