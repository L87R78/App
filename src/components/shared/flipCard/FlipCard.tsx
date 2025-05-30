import backIdimg from '@/assets/images/bg_id_card_back.png';
import frontIdimg from '@/assets/images/bg_id_card_front.png';
import { Button } from '@/components/ui';
import { useState } from 'react';
import { useI18nNamespaces } from '@/hooks';
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

  const FlipCardButton = () => (
    <div className="mt-3 flex justify-center">
      {/* TODO:Add icon */}
      <Button variant="outlined" onClick={flipCard}>
        {t('shared/button:flipCard')}
      </Button>
    </div>
  );

  return (
    <div className={`${classes.cardFlip} relative mx-auto flex flex-col items-center`}>
      <img
        src={showFront ? frontId : backId}
        alt="ID Document"
        className="mx-auto"
        width={360}
        height={200}
        loading="lazy"
      />

      {mini && (
        <div className={classes.miniButtons}>
          <button className={classes.overlayBtn} type="button" onClick={toggleModal}>
            {/* TODO: SReplace with actual LazyIcon in React */}
            {/* <RefreshCcw01 fill="white" /> */}
          </button>
          <button className={classes.overlayBtn} type="button" onClick={flipCard}>
            {/* <RefreshCcw01 fill="white" /> */}
          </button>
        </div>
      )}

      {!mini && <FlipCardButton />}

      {isModalOpen && (
        <div className={classes.modalOverlay} onClick={toggleModal}>
          <div
            className={classes.modalContent}
            onClick={e => e.stopPropagation()}
            role="dialog"
            tabIndex={-1}
          >
            <img src={showFront ? frontId : backId} alt="ID Document" width={650} height={450} />
            <FlipCardButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardFlip;
