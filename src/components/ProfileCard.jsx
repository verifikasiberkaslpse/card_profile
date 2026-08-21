import { TwitterIcon, FacebookIcon, InstagramIcon } from './icons.jsx';

const ProfileCard = ({ onOpenPortfolio = () => {} }) => {
  return (
    <div
      className="bg-surface-container-lowest max-w-max-width-card w-full rounded-xl p-xl flex flex-col items-center text-center relative border border-secondary/10"
      style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)' }}
    >
      <div className="relative mb-md">
        <img
          className="w-24 h-24 rounded-full object-cover border-2 border-surface-container-lowest"
          data-alt="A portrait of a professional individual in a minimalist studio setting. The lighting is soft and diffused, creating a calm and inviting atmosphere. The person is looking directly at the camera with a subtle smile. The background is a crisp, clean white, aligning with a sophisticated light-mode aesthetic."
          src="https://drive.google.com/uc?export=view&id=1D0sfgt2tBnXJ_x_QcE-diwjRBRw3DWtG"
          style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)' }}
          alt="Portrait of Junaidi"
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-surface-container-lowest"></div>
      </div>
      <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">
        Junaidi
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md">
        Citizen Developer
      </p>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-[280px]">
        A non-technical employee who builds business applications using low-code, no-code, or AI tools.
      </p>
      <div className="flex gap-md w-full mb-lg">
        <button
          type="button"
          onClick={onOpenPortfolio}
          className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
        >
          Portofolio
        </button>
        <button
          type="button"
          onClick={() => {
            window.location.href =
              'https://wa.me/6285709214099?text=Halo%20,%20saya%20tertarik%20memesan%20jasa%20pembuatan%20aplikasi%20website%20dari%20Anda.%20Bagaimana%20cara%20kerja,%20syarat,%20dan%20langkah%20awalnya?%20Terima%20kasih.';
          }}
          className="flex-1 border border-outline-variant text-on-surface font-label-md text-label-md py-3 rounded-lg hover:bg-surface-container-low transition-colors"
        >
          Message
        </button>
      </div>
      <div className="flex gap-gutter pt-md border-t border-secondary-container/50 w-full justify-center">
        <a
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
          href="#"
        >
          <TwitterIcon />
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
          href="#"
        >
          <FacebookIcon />
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
          href="#"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
