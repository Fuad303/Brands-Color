import './App.scss';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar'
import MainContext from './MainContext'
import BrandsData from './brands.json'
import Content from './components/Content'
import Copied from './components/Copied';

function App() {
  const brandsArray = [];
  
  Object.keys(BrandsData).map(key => {
      brandsArray.push(BrandsData[key])
  })
  
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')
  
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  useEffect(() =>{
    if(copied){
      setTimeout(() => {
        setCopied(false)
      }, 1000);
    }
  }, [copied])
  
  useEffect(() =>{
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  return (
    <>
      <MainContext.Provider value={data}>    
      <Sidebar/>
      <Content/>               
      {copied && <Copied color={copied}/>}
      </MainContext.Provider>
    </>
  );
}

export default App;
