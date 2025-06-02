import { Button, Container, Modal, Typography } from '@/components/ui';
import { RootState } from '@/store';
import { type FC } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  onClose?: () => void;
  onContinue: () => void;
  message?: string;
  buttonMessage?: string;
};

const SuccessModal: FC<Props> = ({
  onClose,
  onContinue,
  message = 'Documents signed successfully!',
  buttonMessage = 'Continue',
}) => {
  const isVisible = useSelector((state: RootState) => state.common.isSuccessModalVisible);

  return (
    <Modal open={isVisible} onClose={onClose}>
      <section className="flex flex-col items-center justify-center gap-4 text-center">
        {/* TODO: Add success icon here */}
        <Container>
          <Typography variant="h6" className="text-center mb-4">
            {message}
          </Typography>
          <Button onClick={onContinue}>{buttonMessage}</Button>
        </Container>
      </section>
    </Modal>
  );
};

export default SuccessModal;
