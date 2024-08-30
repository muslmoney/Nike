import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';

const Header = () => {
  const [Burger, setBurger] = useState(false);
  const onClickBurger = () => setBurger((prev) => !prev);
  const [isSearchActive, setSearchActive] = useState(false);

  const searchRef = useRef(null);

  const [inputValue, setInputValue] = useState('');

  // const toggleSearch = () => setSearchActive(prev => !prev);

  const toggleSearch = () => {
    if (
      searchRef.current &&
      searchRef.current.classList.contains('SearchActive')
    ) {
      return; 
    } else {
      setInputValue('');
    }
    setSearchActive((prev) => !prev);
  };

  const closeSearch = (event) => {
    event.stopPropagation();
    setSearchActive(false);
    setInputValue('');
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      closeSearch({ stopPropagation: () => {} }); 
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="Header-top">
      <div className="Header__topbar container">
        <Link to={'/jordan'}>
          <svg
            className="Header__logo-jordan"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="44px"
            height="44px"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <div className="Header__topbar-menu">
          <nav>
            <ul className="Header__topbar-menu-list">
              <li className="Header__topbar-item">
                <a href={'/products'}>
                  <p>Find a Store</p>
                </a>
              </li>
              <li className="Header__topbar-item">
                <a href={''}>
                  <p>Help</p>
                </a>
              </li>
              <li className="Header__topbar-item">
                <a href={''}>
                  <p>Join us</p>
                </a>
              </li>
              <li className="Header__topbar-item">
                <a href={''}>
                  <p>Sign In</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header className="Header">
        <div className="container">
          <div className="Header__inner">
            <div className="Header__wrap-menu">
              <Link>
                <svg
                  id="pon"
                  className="Header__logo swoosh-svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <nav className={`Header__nav  ${Burger && 'active'}`}>
                <ul className={`Header__nav-list`}>
                  <li className="Header__nav-item">
                    <a href={'/products'} className="Header__nav-link">
                      <p className="Header__nav-text">New & Featured</p>
                    </a>

                    <div className="Header-hover">
                      <div className="Header__hover-menu">
                        <div className="Header__hover-card">
                          <h3>New & Featured</h3>
                          <a className="opacity" href="">
                            <p>New arrivals</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Best sellers</p>
                          </a>
                          <a className="opacity" href="">
                            <p>new and upcoming drops</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Trending</h3>
                          <a className="opacity" href="">
                            <p>ACG</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Retro running</p>
                          </a>
                          <a className="opacity" href="">
                            <p>shop sport</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Shop classics</h3>
                          <a className="opacity" href="">
                            <p>dunk</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air jordan</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air force</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air max</p>
                          </a>
                          <a className="opacity" href="">
                            <p>blazer</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Explore</h3>
                          <a className="opacity" href="">
                            <p>Lorem, ipsum.</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Lorem ipsum dolor sit.</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Lorem, ipsum dolor.</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Lorem ipsum sit.</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Lorem ipsum dolor sit amet.</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="Header__nav-item">
                    <a href={'/products'} className="Header__nav-link">
                      <p className="Header__nav-text">Men</p>
                    </a>

                    <div className="Header-hover">
                      <div className="Header__hover-menu">
                        <div className="Header__hover-card">
                          <h3>New & Featured</h3>
                          <a className="opacity" href="">
                            <p>New arrivals</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Best sellers</p>
                          </a>
                          <a className="opacity" href="">
                            <p>new and upcoming drops</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>collections</h3>
                            <a className="opacity" href="">
                              <p>summer shop1</p>
                            </a>
                            <a className="opacity" href="">
                              <p>soccer cleats</p>
                            </a>
                            <a className="opacity" href="">
                              <p>fitness favourites</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Shoes</h3>
                          <a className="opacity" href="">
                            <p>all shoes</p>
                          </a>
                          <a className="opacity" href="">
                            <p>life style</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <a className="opacity" href="">
                            <p>metro running</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air max</p>
                          </a>
                          <a className="opacity" href="">
                            <p>trainning & gym</p>
                          </a>
                          <a className="opacity" href="">
                            <p>nike by you</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>clothing</h3>
                          <a className="opacity" href="">
                            <p>all clothing</p>
                          </a>
                          <a className="opacity" href="">
                            <p>pants & tights</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jackets & vests</p>
                          </a>
                          <a className="opacity" href="">
                            <p>big & tall</p>
                          </a>
                          <a className="opacity" href="">
                            <p>shorts</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>accessories</h3>
                            <a className="opacity" href="">
                              <p>all accessories</p>
                            </a>
                            <a className="opacity" href="">
                              <p>socks</p>
                            </a>
                            <a className="opacity" href="">
                              <p>sunglasses</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>shop by sport</h3>
                          <a className="opacity" href="">
                            <p>Golf</p>
                          </a>
                          <a className="opacity" href="">
                            <p>football</p>
                          </a>
                          <a className="opacity" href="">
                            <p>basketball</p>
                          </a>
                          <a className="opacity" href="">
                            <p>soccer</p>
                          </a>
                          <a className="opacity" href="">
                            <p>swimming</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="Header__nav-item">
                    <a href={'/products'} className="Header__nav-link">
                      <p className="Header__nav-text">Women</p>
                    </a>

                    <div className="Header-hover">
                      <div className="Header__hover-menu">
                        <div className="Header__hover-card">
                          <h3>New & Featured</h3>
                          <a className="opacity" href="">
                            <p>New arrivals</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Best sellers</p>
                          </a>
                          <a className="opacity" href="">
                            <p>new and upcoming drops</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>collections</h3>
                            <a className="opacity" href="">
                              <p>summer shop1</p>
                            </a>
                            <a className="opacity" href="">
                              <p>soccer cleats</p>
                            </a>
                            <a className="opacity" href="">
                              <p>fitness favourites</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Shoes</h3>
                          <a className="opacity" href="">
                            <p>all shoes</p>
                          </a>
                          <a className="opacity" href="">
                            <p>life style</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <a className="opacity" href="">
                            <p>metro running</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air max</p>
                          </a>
                          <a className="opacity" href="">
                            <p>trainning & gym</p>
                          </a>
                          <a className="opacity" href="">
                            <p>nike by you</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>clothing</h3>
                          <a className="opacity" href="">
                            <p>all clothing</p>
                          </a>
                          <a className="opacity" href="">
                            <p>pants & tights</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jackets & vests</p>
                          </a>
                          <a className="opacity" href="">
                            <p>big & tall</p>
                          </a>
                          <a className="opacity" href="">
                            <p>shorts</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>accessories</h3>
                            <a className="opacity" href="">
                              <p>all accessories</p>
                            </a>
                            <a className="opacity" href="">
                              <p>socks</p>
                            </a>
                            <a className="opacity" href="">
                              <p>sunglasses</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>shop by sport</h3>
                          <a className="opacity" href="">
                            <p>Golf</p>
                          </a>
                          <a className="opacity" href="">
                            <p>football</p>
                          </a>
                          <a className="opacity" href="">
                            <p>basketball</p>
                          </a>
                          <a className="opacity" href="">
                            <p>soccer</p>
                          </a>
                          <a className="opacity" href="">
                            <p>swimming</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="Header__nav-item">
                    <a href={'/products'} className="Header__nav-link">
                      <p className="Header__nav-text">Kids</p>
                    </a>
                    <div className="Header-hover">
                      <div className="Header__hover-menu">
                        <div className="Header__hover-card">
                          <h3>New & Featured</h3>
                          <a className="opacity" href="">
                            <p>New arrivals</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Best sellers</p>
                          </a>
                          <a className="opacity" href="">
                            <p>new and upcoming drops</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>collections</h3>
                            <a className="opacity" href="">
                              <p>summer shop1</p>
                            </a>
                            <a className="opacity" href="">
                              <p>soccer cleats</p>
                            </a>
                            <a className="opacity" href="">
                              <p>fitness favourites</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Shoes</h3>
                          <a className="opacity" href="">
                            <p>all shoes</p>
                          </a>
                          <a className="opacity" href="">
                            <p>life style</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <a className="opacity" href="">
                            <p>metro running</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air max</p>
                          </a>
                          <a className="opacity" href="">
                            <p>trainning & gym</p>
                          </a>
                          <a className="opacity" href="">
                            <p>nike by you</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>clothing</h3>
                          <a className="opacity" href="">
                            <p>all clothing</p>
                          </a>
                          <a className="opacity" href="">
                            <p>pants & tights</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jackets & vests</p>
                          </a>
                          <a className="opacity" href="">
                            <p>big & tall</p>
                          </a>
                          <a className="opacity" href="">
                            <p>shorts</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>accessories</h3>
                            <a className="opacity" href="">
                              <p>all accessories</p>
                            </a>
                            <a className="opacity" href="">
                              <p>socks</p>
                            </a>
                            <a className="opacity" href="">
                              <p>sunglasses</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>shop by sport</h3>
                          <a className="opacity" href="">
                            <p>Golf</p>
                          </a>
                          <a className="opacity" href="">
                            <p>football</p>
                          </a>
                          <a className="opacity" href="">
                            <p>basketball</p>
                          </a>
                          <a className="opacity" href="">
                            <p>soccer</p>
                          </a>
                          <a className="opacity" href="">
                            <p>swimming</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="Header__nav-item">
                    <a href={'/products'} className="Header__nav-link">
                      <p className="Header__nav-text">Sale</p>
                    </a>
                    <div className="Header-hover">
                      <div className="Header__hover-menu">
                        <div className="Header__hover-card">
                          <h3>New & Featured</h3>
                          <a className="opacity" href="">
                            <p>New arrivals</p>
                          </a>
                          <a className="opacity" href="">
                            <p>Best sellers</p>
                          </a>
                          <a className="opacity" href="">
                            <p>new and upcoming drops</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>collections</h3>
                            <a className="opacity" href="">
                              <p>summer shop1</p>
                            </a>
                            <a className="opacity" href="">
                              <p>soccer cleats</p>
                            </a>
                            <a className="opacity" href="">
                              <p>fitness favourites</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>Shoes</h3>
                          <a className="opacity" href="">
                            <p>all shoes</p>
                          </a>
                          <a className="opacity" href="">
                            <p>life style</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <a className="opacity" href="">
                            <p>metro running</p>
                          </a>
                          <a className="opacity" href="">
                            <p>air max</p>
                          </a>
                          <a className="opacity" href="">
                            <p>trainning & gym</p>
                          </a>
                          <a className="opacity" href="">
                            <p>nike by you</p>
                          </a>
                        </div>
                        <div className="Header__hover-card">
                          <h3>clothing</h3>
                          <a className="opacity" href="">
                            <p>all clothing</p>
                          </a>
                          <a className="opacity" href="">
                            <p>pants & tights</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jackets & vests</p>
                          </a>
                          <a className="opacity" href="">
                            <p>big & tall</p>
                          </a>
                          <a className="opacity" href="">
                            <p>shorts</p>
                          </a>
                          <a className="opacity" href="">
                            <p>jordan</p>
                          </a>
                          <div className="Header__hover-card">
                            <h3>accessories</h3>
                            <a className="opacity" href="">
                              <p>all accessories</p>
                            </a>
                            <a className="opacity" href="">
                              <p>socks</p>
                            </a>
                            <a className="opacity" href="">
                              <p>sunglasses</p>
                            </a>
                          </div>
                        </div>
                        <div className="Header__hover-card">
                          <h3>shop by sport</h3>
                          <a className="opacity" href="">
                            <p>Golf</p>
                          </a>
                          <a className="opacity" href="">
                            <p>football</p>
                          </a>
                          <a className="opacity" href="">
                            <p>basketball</p>
                          </a>
                          <a className="opacity" href="">
                            <p>soccer</p>
                          </a>
                          <a className="opacity" href="">
                            <p>swimming</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <nav className="Header__tools">
                <ul className="Header__tools-list">
                  <li
                    ref={searchRef}
                    onClick={(e) => e.stopPropagation()}
                    className={`Header__input-item ${
                      isSearchActive ? 'SearchActive' : ''
                    } Header-search`}
                  >
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="Header__form"
                      onClick={toggleSearch}
                    >
                      <button type="button" className="Header__form-btn">
                        <svg
                          className="Header__icon-search search-button"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          role="img"
                          width="24px"
                          height="24px"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                          ></path>
                        </svg>
                      </button>
                      <input
                      onChange={handleInputChange}
                        value={inputValue}
                        style={{ border: 'none', background: 'transparent' }}
                        placeholder="Search"
                        type="text"
                        className="Header__input"
                      />
                      {isSearchActive && (
                        <button
                          type="button"
                          className="Header__form-close"
                          onClick={closeSearch}
                        >
                          <svg
                            className="Header__icon-close"
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                            role="img"
                            width="24px"
                            height="24px"
                            fill="none"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="1.5"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      )}
                    </form>
                  </li>
                  <li className="Header__tools-item Header__icon-favourites">
                    <a href="/favourites" className="Header__tools-link">
                      <svg
                        className="Header__icon-favourites"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="Header__tools-item">
                    <a href="/profile" className="Header__tools-link">
                      <svg
                        className="Header__tools-profile"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="Header__tools-item">
                    <a
                      href="/bag"
                      className="Header__tools-link Header__tools-bag"
                    >
                      <svg
                        className="Header__icon-bag"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className="Header__tools-item Header-burger"
                    onClick={onClickBurger}
                  >
                    <Hamburger size={24} left={0} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
