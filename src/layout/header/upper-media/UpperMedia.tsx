import { FC } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { infoConstants } from '../../../models/constants/info.constant';
import classNames from 'classnames';
import './upper-media.scss';

interface Props {
  className?: string;
}

const UpperMedia: FC<Props> = ({ className }) => {
  return (
    <div className={classNames('upper-media', className)}>
      <a
        className='upper-media__icon-link'
        href={infoConstants.FACEBOOK_LINK}
        aria-label='Przejdź do Facebooka'
        target='_blank'
      >
        <FaFacebook className='upper-media__icon' alt='Ikonka Facebooka' />
      </a>

      <a
        className='upper-media__icon-link'
        href={infoConstants.INSTAGRAM_LINK}
        aria-label='Przejdź do Instagrama'
        target='_blank'
      >
        <FaInstagram className='upper-media__icon' alt='Ikonka Instagrama' />
      </a>

      <a
        className='upper-media__icon-link'
        href={`tel:+48${infoConstants.PHONE_NUMBER}`}
        aria-label='Zadzwoń na numer telefoniczny'
        target='_blank'
      >
        <FaPhoneAlt
          className='upper-media__icon'
          alt='Ikonka słuchawki telefonu'
        />
      </a>

      <a
        className='upper-media__icon-link'
        href={`mailto:${infoConstants.MAIL_ADRESS}`}
        aria-label='Napisz wiadomość mailową'
        target='_blank'
      >
        <FaEnvelope
          className='upper-media__icon'
          alt='Ikonka koperty pocztowej'
        />
      </a>
    </div>
  );
};

export default UpperMedia;
