import { FC } from 'react';
import {
  CirclesFirst,
  CirclesSecond,
  CirclesThird,
} from './about-circles/AboutCircles';
import { Fade } from 'react-awesome-reveal';
import './about-section.scss';
import { HomepageSections } from '../../../models/enums/enums.app';
import { durationConsts } from '../../../models/constants/style.constant';

const ABOUT_IMAGES = [
  {
    src: '/src/assets/images/about_img-1.jpg',
    alt: 'Aleksandra trzymająca na kolanach psa',
  },
  { src: '/src/assets/images/about_img-2.jpg', alt: 'Mały skupiony pies patrzący w prawo' },
  {
    src: '/src/assets/images/about_img-3.jpg',
    alt: 'Grupa właścicieli i ich psów w trakcie treningu na miejskim placu',
  },
];

const AboutSection: FC = () => {
  return (
    <div className='about' id={HomepageSections.About}>
      <div className='about__container'>
        <div className='about__block'>
          <div className='about__content'>
            <h2 className='about__content-header'>o nas</h2>
            <Fade
              cascade
              duration={durationConsts.FADE_DURATION}
              triggerOnce={true}
            >
              <p className='about__content-paragraph'>
                Nazywam się Aleksandra Linek, szkoleniem psów metodą naturalną
                zajmuję się od 2010 roku, przez moje ręce przewinęło się już
                dziesiątki psów wielu ras i z różnymi problemami.
              </p>
              <p className='about__content-paragraph'>
                Od lat zgłębiam techniki szkoleniowe oparte na pozytywnym
                wzmocnieniu. Kluczowe jest dla mnie budowanie więzi opartej na
                zaufaniu i zrozumieniu.
                <br /> <br /> Prywatnie jestem hodowcą i właścicielem 7 psów
                rasy Boston Terrier, nie jednego z nich będziecie mieli okazję
                poznać na zajęciach.
              </p>
            </Fade>
          </div>
          <div className='about__image-container about__image-first'>
            <img
              className='about__image'
              src={ABOUT_IMAGES[0].src}
              alt={ABOUT_IMAGES[0].alt}
              draggable='false'
            />
            <CirclesFirst />
          </div>
        </div>
        <div className='about__block'>
          <div className='about__image-container about__image-second'>
            <img
              className='about__image'
              src={ABOUT_IMAGES[1].src}
              alt={ABOUT_IMAGES[1].alt}
              draggable='false'
            />
            <CirclesSecond />
          </div>
          <div className='about__content'>
            <h2 className='about__content-header'>szkolenie</h2>
            <Fade
              cascade
              duration={durationConsts.FADE_DURATION}
              triggerOnce={true}
            >
              <p className='about__content-paragraph'>
                Zajęcia odbywają się w mieście Trzebnica w różnych lokacjach.
              </p>
              <p className='about__content-paragraph'>
                Kursy miesięczne odbywają się również w Obornikach Śląskich i
                Miliczu po zebraniu grupy min 5 psów. <br /> <br /> 1 cykl
                szkoleniowy to 8 zajęć po 45 min.
              </p>
            </Fade>
          </div>
        </div>
        <div className='about__block'>
          <div className='about__content'>
            <Fade
              cascade
              duration={durationConsts.FADE_DURATION}
              triggerOnce={true}
            >
              <p className='about__content-paragraph'>
                Na zajęcia możesz dołączyć w dowolnej chwili już z
                kilkumiesięcznym szczeniakiem jeśli posiada szczepienie na
                wściekliznę, które ukazujesz na pierwszych zajęciach.
              </p>
              <p className='about__content-paragraph'>
                Na zajęcia indywidualne zapraszam już szczenięta nawet od 10
                tygodnia życia, ustalimy plan działania, wprowadzimy zasady
                domowe a po szczepieniu na wściekliznę maluch będzie już gotowy
                by dołączyć do zajęć grupowych.
              </p>
            </Fade>
          </div>
          <div className='about__image-container about__image-third'>
            <img
              className='about__image'
              src={ABOUT_IMAGES[2].src}
              alt={ABOUT_IMAGES[2].alt}
              draggable='false'
            />
            <CirclesThird />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
