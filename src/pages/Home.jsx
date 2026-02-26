import useFetch from '../hooks/useFetch'
import { endpoints } from '../api/tmdb'
import HeroBanner from '../HeroBanner'

function Home() {
  const { data, loading, error } = useFetch(endpoints.trending)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong.</p>
  if (!data) return null

  return (
    <div>
      <HeroBanner movies={data} />
    </div>
  )
}

export default Home