import { getContrastYIQ } from '../helpers'
import { MdOutlineContentCopy } from 'react-icons/md'
import MainContext from '../MainContext'
import { useContext } from 'react'
import ClipboardButton from 'react-clipboard.js'

function Brand({ brand }) {
    const {setSelectedBrands, selectedBrands, setCopied} = useContext(MainContext)

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)) {
          setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
          setSelectedBrands([...selectedBrands, brand.slug])
        }
      }
      const setColor = (color) =>{
        setCopied(color)
      }
    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
        <div className='brand-title'>
            <p onClick={toggleSelected} className='brand-name'>{brand.title}</p>
            <ion-icon className="tick-icon" name="checkmark-outline"></ion-icon>
        </div>
        <div className='brand-color'>
          {brand.colors.map(color => 
            <ClipboardButton onSuccess={() => setColor(color)} data-clipboard-text={color} component="div" className="detail-color" style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
              <MdOutlineContentCopy className='copy-icon'/>
              <span className='color-name'>#{color}</span>
            </ClipboardButton>
          )}
        </div>
        <div className="detail">
            <span> Updated { brand.modified}</span>
            <a href={brand.brand}>Brand URL</a>
            <a href={brand.source_url}>Source URL</a>
        </div>
      </div>
  )
}
export default Brand