import { FC } from 'react';
import { HomepageSections } from '../../../models/enums/enums.app';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  onNavbarAsyncClick,
  onNavbarLinkClick,
} from '../../../utils/navigate.utils';
import classNames from 'classnames';
import './navbar.scss';

interface Props {
  className?: string;
  toggleMobileNavbar?: () => void;
}

const Navbar: FC<Props> = ({ className, toggleMobileNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname != '/';

  const navigateNotHome = async () => {
    const res = navigate('/');
    return res;
  };

  return (
    <nav className={classNames('navbar', className)}>
      <div className='navbar__element'>
        <button
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Home,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Home, toggleMobileNavbar)
          }
        >
          Główna
        </button>
      </div>
      <div className='navbar__element'>
        <button
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.About,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.About, toggleMobileNavbar)
          }
        >
          O nas
        </button>
      </div>
      <div className='navbar__element'>
        <button
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Offer,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Offer, toggleMobileNavbar)
          }
          id='navbar__anchor'
        >
          Oferta
        </button>
      </div>
      <div className='navbar__element'>
        <button
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Clients,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Clients, toggleMobileNavbar)
          }
        >
          Nasi Klienci
        </button>
      </div>
      <div className='navbar__element'>
        <button
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Contact,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Contact, toggleMobileNavbar)
          }
        >
          Kontakt
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
