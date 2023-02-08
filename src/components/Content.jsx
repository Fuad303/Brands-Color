import Search from './Search'
import Brand from './Brand'
import MainContext from '../MainContext'
import { useContext } from 'react'
import LazyLoad from 'react-lazyload'
import Download from './Download'

function Content() {
  
  const { brands, selectedBrands } = useContext(MainContext)

  return (
    <main className='content'>
      <header className="header">
        <Search/>
        <Download/>
      </header>
      <section className="brands">
      {brands.map((brand) => {
        return (
        <LazyLoad key={brand.slug} once={true} placeholder="Yüklənir...">
          <Brand brand={brand}/>
        </LazyLoad>
        )
      })}
      </section>
    </main>
  )
}
export default Content