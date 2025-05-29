const classes = {
  layoutLoader: (isModal?: boolean) => ({
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'grid',
    placeItems: 'center',
    background: 'rgba(255, 255, 255, 0.50)',
    ...(isModal && {
      borderRadius: '40px',
    }),
    zIndex: 10000,

    animationRotate: {
      animation: `animationImage 1.5s linear infinite`,
      '@keyframes animationImage': {
        '0%': {
          transform: 'rotate(0)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
  }),
  imageLoader: {
    animationRotate: {
      animation: `animationImage 1.5s linear infinite`,
      '@keyframes animationImage': {
        '0%': {
          transform: 'rotate(0)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
};

export default classes;
