// import React, { useCallback, useEffect, useState } from 'react';
// // import './Navbar.css';
// import  styles  from './Navbar.module.css' ;
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../Context/CartContext';
// import {BiCartAlt} from 'react-icons/bi'
// import {CgProfile} from 'react-icons/cg'
// import { jwtDecode } from 'jwt-decode';

// const Navbar = () => {
//   const { cartCount } = useCart();
//   const [name, setName] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const navigate = useNavigate()


//   const handleLogout = useCallback(() => {
//     localStorage.removeItem('token');
//     setName(null);
//     navigate('/login');
//   }, [navigate]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if(token){
//       const decodedToken = jwtDecode(token);
//       setName(decodedToken.name)
//       setIsAdmin(decodedToken.isAdmin)
//     }else {
//       setName(null);
//     }


//   }, [navigate,handleLogout])


//   return (
//     <div className= { styles.navbar_bg }>
//       <div className= { styles.container} >


//       <div className={ styles.content}>
//         <div className={ styles.logo_img}>
//           <img src="./D2R logo.jpeg" alt="Img" className={ styles.logo_img_src} />
//         </div>
//         <div className={ styles.logo_text}>
//         D2R
//         </div>
//         <span className={ styles.right_line}></span>
//       </div>

//       { (isAdmin && name )?(
//         <>
//         <div className={ styles.flexCenter}>

//         <Link to={'/admin-orders'} className={ styles.admin_view}>View Orders</Link>
//         <span className={ styles.right_line}></span>
//         <Link to={'/admin-create'} className={ styles.admin_view}>Create Rack</Link>
//         <span className={styles.right_line}></span>
//         <Link to={'/admin-manage'} className={styles.admin_view}>Manage Racks</Link>
//         </div>

//         <div className={ styles.flexCenter}>
//           <div><CgProfile size={20}/></div>
//           <div>{name}</div>
//           <span className={ styles.right_line}></span>

//           <div className={ styles.logout} onClick={handleLogout}>Logout</div>
//         </div>


//         </>
//       ):
//       (name) ? (
//       <>
//       <div className={ styles.navigators}>
//         <Link to="/">Home</Link>
//         <span className={ styles.right_line}></span>

//         <Link to="/cart" className={ styles.cartNav_container}><BiCartAlt size={30}/>{cartCount}</Link>
//         <span className={ styles.right_line}></span>
//         <Link to={'/history'} className={ styles.admin_view}>History</Link>

//       </div>


//         <div className={styles.flexCenter}>
//           <div><CgProfile size={20}/></div>
//           <div>{name}</div>
//           <span className={styles.right_line}></span>

//           <Link className='logout' onClick={handleLogout}>Logout</Link>
//         </div>
//         </>
//       ) :
//         (
//         <div className={styles.flexCenter}>
//           <Link to="/login" className={styles.login}>Login</Link>
//           <span className={styles.right_line}></span>
//           <Link to="/signup" className={styles.signup}>Signup</Link>
//         </div>
//       )}
//       </div>
//       </div>
//   );
// }

// export default Navbar;






// react code
//   return (
//     <nav  className= {styles.navbar_container}>
//         <div class="name">
//             <div class="line"></div> 
//             <div class="line"></div>
//             <div class="line"></div>
//         </div>

//       {/* <div className= {styles.navbar_left}> */}
//         <div className={ styles.logo_img}>
//           <img src="./D2R logo.jpeg" alt="Img" className={ styles.logo_img_src} />
//          <h2>D2R</h2>
//         </div>
//         {/* <div className={ styles.logo_text}> D2R </div> */}
//       {/* </div> */}

//         { (isAdmin && name )?(
//             <>
//             <div className= {styles.navbar_center}>
//             <Link to={'/admin-orders'} className={ styles.admin_view}>View Orders</Link>
//              <Link to={'/admin-create'} className={ styles.admin_view}>Create Rack</Link>
//              <Link to={'/admin-manage'} className={styles.admin_view}>Manage Racks</Link>
//             </div>

//             <div className= {styles.flexCenter}>
//             <div><CgProfile size={20}/></div>
//                <div>{name}</div>
//                <div className={ styles.logout} onClick={handleLogout}>Logout</div>
//             </div>

//             </>
//           ):
//            (name) ? (
//            <>
//              <div className={ styles.navigators}>
//              <Link to="/">Home</Link>    
//              <Link to="/cart" className={ styles.cartNav_container}><BiCartAlt size={30}/>{cartCount}</Link>
//              <Link to={'/history'} className={ styles.admin_view}>History</Link> 
//             </div>

//             <div className={styles.flexCenter}>
//               <div><CgProfile size={20}/></div>
//                <div>{name}</div>    
//               <Link className='logout' onClick={handleLogout}>Logout</Link>
//              </div>
//              </>
//           ) :
//              (
//              <div className={styles.flexCenter}>
//                <Link to="/login" className={styles.login}>Login</Link>
//                <Link to="/signup" className={styles.signup}>Signup</Link>
//              </div>
//            )}

//     </nav>

//   );
// }






// //  CHANGES I HV MADE


// import React, { useCallback, useEffect, useState } from 'react';
// // import './Navbar.css';
// import  styles  from './Navbar.module.css' ;
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../Context/CartContext';
// import {BiCartAlt} from 'react-icons/bi'
// import 'boxicons';
// // import {CgProfile} from 'react-icons/cg'
// import { jwtDecode } from 'jwt-decode';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useRef } from "react";


// const Navbar = () => {
//   const { cartCount } = useCart();
//   const [name, setName] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const navigate = useNavigate()
//   const navRef = useRef();

//   const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
//     };
//   const handleLogout = useCallback(() => {
//     localStorage.removeItem('token');
//     setName(null);
//     navigate('/login');
//   }, [navigate]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if(token){
//       const decodedToken = jwtDecode(token);
//       setName(decodedToken.name)
//       setIsAdmin(decodedToken.isAdmin)
//     }else {
//       setName(null);
//     }


//   }, [navigate,handleLogout])



// return (
//   <nav className={styles.navbar_container}>
//     <div className={styles.name}>
//       <div className="line"></div>
//       <div className="line"></div>
//       <div className="line"></div>

//     <button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
//             </div>

//     <div className={styles.logo_img}>
//       <img src="./D2R logo.jpeg" alt="Img" className={styles.logo_img_src} />
//       <h2>D2R</h2>
//     </div>

//     {isAdmin && name ? (
//       <div className={styles.navbar_center}>

//         <Link to={'/home'} className={styles.admin_view}>

//           {/* {<img src='./bx-home-alt-2.svg' alt=''></img> } */}
//           <box-icon name='home-alt-2' animation='tada' ></box-icon>
//         </Link>
//         <Link to={'/admin-orders'} className={styles.admin_view}>View Orders</Link>
//         <Link to={'/admin-create'} className={styles.admin_view}>Create Rack</Link>
//         <Link to={'/admin-manage'} className={styles.admin_view}>Manage Racks</Link>
//         <Link to={''} className={styles.admin_view}>Random 1</Link>
//         <Link to={''} className={styles.admin_view}>Random 2</Link>
//       </div>
//     ) : name ? (
//       <div className={styles.navigators}>

//         <Link to="/">Home</Link> 

//         <Link to="/cart" className={styles.cartNav_container}><BiCartAlt size={30} />{cartCount}</Link>
//         <Link to={'/history'} className={styles.admin_view}>History</Link>
//       </div>
//     ) : (
//       <div className={styles.flexCenter}>
//         <Link to="/login" className={styles.login}>Login</Link>
//         <Link to="/signup" className={styles.signup}>Signup</Link>
//       </div>
//     )}

//     {name && (
//       // <div className={styles.flexCenter}>
//       //   <div><CgProfile size={20} /></div>
//       //   <div>{name}</div>
//       //   <div className={styles.logout} onClick={handleLogout}>Logout</div>
//       // </div>
//       <div class={styles.flexCenter}>
//         {/* <div><CgProfile size={20} /></div> */}
//       <img src="./images.png" alt=" User-profile"/>
//       <span> {name}</span>
//       <i class='bx bx-caret-down'></i>
//       <div className={styles.logout} onClick={handleLogout}>Logout</div>
//       <button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
//   </div>
//     )}
//   </nav>
// );
// }
// export default Navbar;






// new navbar designs

import React, { useCallback, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { BiCartAlt } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
// import 'boxicons'; // Import BoxIcons library
// import 'boxicons/css/boxicons.min.css'; // Import BoxIcons CSS

const Navbar = () => {
  const { cartCount } = useCart();
  const [name, setName] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    setName(null);
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setName(decodedToken.name)
      setIsAdmin(decodedToken.isAdmin)
    } else {
      setName(null);
    }


  }, [navigate, handleLogout])



  return (

    <nav className={styles.main_nav}>
      {/* 1st logo part  */}
      <div className={styles.logo}>
        <img src="./D2R logo.jpeg" alt="Img" className={styles.logo_img_src} />
        <h2>D2R</h2>
      </div>

      {/* 2nd menu part  */}
      <div className={showMediaIcons ? `${styles.menu_link} mobile_menu_link` : 'menu_link'}>

        {(isAdmin && name) ? (
          <>
            <div className={styles.menu_link}>
              <ul>
                <li>
                  <Link to={'/home'} className={styles.admin_view}>
                    {/* <box-icon name='home-alt-2' animation='tada'></box-icon> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={'/admin-orders'} className={styles.admin_view}>View Orders</Link>
                </li>
                <li>
                  <Link to={'/admin-create'} className={styles.admin_view}>Create Rack</Link>
                </li>
                <li>
                  <Link to={'/admin-manage'} className={styles.admin_view}>Manage Racks</Link>
                </li>
                <li>
                  <Link to={''} className={styles.admin_view}>Random 1</Link>
                </li>
                <li>
                  <Link to={''} className={styles.admin_view}>Random 2</Link>
                </li>
              </ul>
            </div>

            {/* 3rd social media links */}

            <div className={styles.social_media}>
              <img src="./images.png" alt="User-profile" />
              <span>{name}</span>
              <div className={styles.logout} onClick={handleLogout}>Logout</div>

              {/* hamburget menu start  */}
              <div className={styles.hamburger_menu}>
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <GiHamburgerMenu />
                </a>
              </div>
            </div>
          </>
        ) :
          (name) ? (
            <>
              <div className={styles.navigators}>
                <Link to="/">Home</Link>
                <Link to="/cart" className={styles.cartNav_container}><BiCartAlt size={30} />{cartCount}</Link>
                <Link to={'/history'} className={styles.admin_view}>History</Link>
              </div>

            </>
          ) :
            (
              <>

                <div className={styles.flexCenter}>
                  <img src="./images.png" alt="User-profile" />
                  <span>{name}</span>
                  <Link className='logout' onClick={handleLogout}>Logout</Link>
                </div>

                <div className={styles.flexCenter}>
                  <Link to="/login" className={styles.login}>Login</Link>
                  <Link to="/signup" className={styles.signup}>Signup</Link>
                </div>
              </>
            )}
      </div>
    </nav>
  );
};

export default Navbar;

