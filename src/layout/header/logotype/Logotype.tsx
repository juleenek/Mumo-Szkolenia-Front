import { FC } from 'react';
import classNames from 'classnames';
import './logotype.scss';

interface Props {
  className?: string;
  isFirstNameVisible?: boolean;
  isSecondNameVisible?: boolean;
}

const LOGO_SRC = '/src/assets/images/logo-bg-01.png';

const Logotype: FC<Props> = ({
  className,
  isFirstNameVisible = true,
  isSecondNameVisible = true,
}) => {
  return (
    <div className={classNames('logotype', className)}>
      <img
        className='logotype__img'
        src={LOGO_SRC}
        alt='Logo "Mumo - pozytywne szkolenie psów", przedstawiające czarno-białego psa z kokardą i okularami'
        draggable='false'
      />
      <div
        className={classNames(
          'logotype__name',
          !isFirstNameVisible && 'invisible'
        )}
      >
        <p
          className={classNames(
            'logotype__name-child',
            !isFirstNameVisible && 'invisible'
          )}
        >
          Mumo
        </p>
        <p
          className={classNames(
            'logotype__name-child',
            !isSecondNameVisible && 'invisible'
          )}
        >
          pozytywne szkolenie psów
        </p>
      </div>
    </div>
  );
};

export default Logotype;
