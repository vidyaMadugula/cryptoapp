import React,{ useState, useEffect } from 'react';
import {Button,Typography,Avatar} from 'antd';//Button
import {Link} from 'react-router-dom';
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons';//MenuOutlined
import icon from '../images/cryptocurrency.png';
//import MenuItem from 'antd/es/menu/MenuItem;



const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  
  return (
    <div className='nav-container'>
        <div className='logo-container '>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Cryptoverse</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
        </div>
        {activeMenu && (
        <div className='Menu'>
          <div className='home'>
          <Link to='/' className='link' > Home</Link><br/> 
          </div> 
          <div  className='home'>
          <Link to='/cryptocurrencies' className='link'>Cryptocurrencies</Link><br/>
          </div>
          {/* <div className='home'>
          <Link to='/exchanges' className='link'>Exchanges</Link><br/>
          </div> */}
          <div className='home'>
          <Link  to='/news' className='link' >News</Link><br/> 
          </div>
        </div>
        )}
        
        
       
         
       
          {/* <Menu>
          <MenuItem icon={FundOutlined}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </MenuItem>
          <MenuItem icon={BulbOutlined}>
            <Link to='/exchanges'>Exchanges</Link>
          </MenuItem>
          <MenuItem icon={MoneyCollectOutlined}>
            <Link to='/news'>News</Link>
          </MenuItem>
          </Menu>   */}
       
    </div>
  )
}

export default Navbar;