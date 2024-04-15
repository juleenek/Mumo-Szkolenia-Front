import { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { FaBars } from 'react-icons/fa';
import { durationConsts } from '../../models/constants/style.constant';
import NavbarMobile from './navbar/navbar-mobile/NavbarMobile';
import NavbarDesktop from './navbar/navbar-dekstop/NavbarDesktop';
import UpperMedia from './upper-media/UpperMedia';
import Logotype from './logotype/Logotype';
import './header.scss';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleNavbar = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header>
      <UpperMedia className='header__upper-media' />
      <div className='header__container'>
        <Logotype className='header__logotype' isSecondNameVisible={false} />
        <NavbarDesktop />
        <button
          onClick={toggleNavbar}
          className='header__menu-btn'
          aria-label='Rozwiń menu'
        >
          <FaBars
            className='header__menu-btn-icon'
            alt='Ikonka do rozwinięcia menu'
          />
        </button>
        <Transition
          nodeRef={nodeRef}
          in={isMobileNavOpen}
          timeout={durationConsts.TRANSITION_DURATION}
        >
          {(state) => (
            <NavbarMobile
              duration={durationConsts.TRANSITION_DURATION}
              state={state}
              toggleNavbar={toggleNavbar}
            />
          )}
        </Transition>
      </div>
    </header>
  );
};

export default Header;
