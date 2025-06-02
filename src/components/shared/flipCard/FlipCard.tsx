import backIdimg from '@/assets/images/bg_id_card_back.png';
import frontIdimg from '@/assets/images/bg_id_card_front.png';
import { Button } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { useState } from 'react';
import { classes } from './styles';

type Props = {
  mini?: boolean;
  frontId?: string;
  backId?: string;
};

const CardFlip: React.FC<Props> = ({ mini = false, frontId = frontIdimg, backId = backIdimg }) => {
  const { t } = useI18nNamespaces(['shared/button']);
  const [showFront, setShowFront] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flipCard = () => setShowFront(prev => !prev);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  return (
    <div className={classes.cardFlip}>
      <div className={`${mini ? classes.cardContainerMini : classes.cardContainer + 'p-2'}`}>
        <div className={`${classes.cardInner} ${!showFront ? classes.cardInnerFlipped : ''}`}>
          <div className={`${classes.cardFace} ${classes.cardFront}`}>
            <img
              src={frontId}
              alt="Front of ID card"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className={`${classes.cardFace} ${classes.cardBack}`}>
            <img
              src={backId}
              alt="Back of ID card"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {!mini && (
        <div className={classes.flipCardButtonWrapper}>
          <Button variant="outlined" onClick={flipCard}>
            {t('shared/button:flipCard')}
          </Button>
        </div>
      )}

      {mini && (
        <div className={classes.miniButtons}>
          <button className={classes.overlayBtn} type="button" onClick={toggleModal}>
            ⛶
          </button>
          <button className={classes.overlayBtn} type="button" onClick={flipCard}>
            ⟳
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className={classes.modalOverlay} onClick={toggleModal}>
          <div
            className={classes.modalContent}
            onClick={e => e.stopPropagation()}
            role="dialog"
            tabIndex={-1}
          >
            <div className={classes.cardContainerModal}>
              <div className={`${classes.cardInner} ${!showFront ? classes.cardInnerFlipped : ''}`}>
                <div className={`${classes.cardFace} ${classes.cardFront}`}>
                  <img src={frontId} alt="Front of ID card" className="rounded-lg" />
                </div>
                <div className={`${classes.cardFace} ${classes.cardBack}`}>
                  <img src={backId} alt="Back of ID card" className="rounded-lg" />
                </div>
              </div>
            </div>

            <div className={classes.flipCardButtonWrapper}>
              <Button variant="outlined" onClick={flipCard}>
                {t('shared/button:flipCard')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardFlip;
