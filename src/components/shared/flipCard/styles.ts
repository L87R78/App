export const classes = {
  cardFlip: 'relative mx-auto flex flex-col items-center',
  miniButtons: 'absolute top-2 right-2 flex gap-2 z-[5]',
  overlayBtn:
    'bg-[hsla(219,5%,50%,0.6)] px-2 py-1 rounded-md cursor-pointer shadow-md text-sm text-white',
  modalOverlay: 'fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-[1000]',
  modalContent: 'bg-white p-4 rounded-2xl flex flex-col items-center gap-4 relative',
  flipCardButtonWrapper: 'mt-3 flex justify-center',

  cardContainer: 'w-[360px] h-[230px] [perspective:1000px] ',
  cardContainerModal: 'w-[650px] h-[450px] [perspective:1000px] mx-auto',
  cardInner:
    'relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]',
  cardInnerFlipped: '[transform:rotateY(180deg)]',
  cardFace: 'absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden flex',
  cardFront: 'z-20',
  cardBack: '[transform:rotateY(180deg)]',
};
