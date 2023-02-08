import React from 'react'
import Modal from 'react-modal';
import { AiOutlineCloseSquare } from "react-icons/ai";
import logo from '../img/logo.png'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '70rem',
      width: '100%',
      minHeight: '28rem',
      padding: '3.5rem 4.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItem: 'center',
      justifyContent: 'center',
      fontSize: '1.4rem'
    },
  };

export default function Sidebar() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <aside className='sidebar'>
        <div className="logo">
            <img src={logo} alt="logo-img" />
            <span>Brand<b>Colors</b></span>
        </div>
        <div className="description">
        The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav className="menu">
            <ul>
                <li><a target="_blank" href="https://github.com/brandcolors/feedback">Suggest a Brand</a></li>
                <li className='modal-list'><button onClick={() => setIsOpen(prevOpen => !prevOpen)}>About Brand<b>Colors</b></button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(prevOpen => !prevOpen)}
                    style={customStyles} >
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>About BrandColors</h2>
                      <button onClick={() => setIsOpen(prevOpen => !prevOpen)}><AiOutlineCloseSquare style={{fontSize: '28px', cursor: 'pointer'}} /></button>
                    </div> <br />
                    <div style={{color: '#607d8b'}}>BrandColors was created by <b>DesignBombs</b>. The goal was to create 
                    a helpful reference for the brand color codes that are needed most often. <br /><br />
                    It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, 
                    Tuts+, and over <b>2 million pageviews</b>. There are now over <b>600 brands </b>  
                    with <b>1600 colors</b> and the collection is always growing</div>
                    <form>
                    </form>
                </Modal>
              </li>
              <li className='about-list'>
              <a href="https://www.designbombs.com/how-to-make-a-website/">
                <div>Brand<b>Colors</b> + DesignBombs</div>
                <span> Learn how to make a website - we have put 
                together an in-depth guide that will help you build 
                your first website with WordPress.</span> </a>
              </li>
              <li>
                <a href="https://stock.adobe.com/?clickref=1100lwv9kSbB&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=buysellads">
                  <img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" style={{width: '12rem'}} /></a><br/>
                <a className='getFree' href="https://stock.adobe.com/?clickref=1100lwv9kvRf&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=buysellads">Get 10 Free Images From Adobe Stock. Start Now.</a>
                <a className='ads-via' href="https://www.carbonads.net/?utm_source=brandcolorsnet&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon">ADS VIA CARBON</a>
              </li>
            </ul>
        </nav>
      </aside>
    </>
  )
}
