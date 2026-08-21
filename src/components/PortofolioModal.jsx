const projects = [
  {
    title: 'Web Informasi Panduan Pengadaan Barang dan Jasa',
    description:
      'Panduan literatur prosedur pengadaan Barang dan Jasa sesuai peraturan perundang-undangan yang berlaku.',
    tech: ['React', 'Tailwind'],
    demo: '#'
  },
  {
    title: 'Aplikasi Verifikasi Berkas Permohonan Akun SPSE Berbasis Web',
    description:
      'Sistem verifikasi dokumen permohonan akun SPSE secara daring untuk mempercepat proses pembuatan akun.',
    tech: ['React', 'Tailwind'],
    demo: '#'
  },
  {
    title: 'Aplikasi Buku Tamu Digital berbasis Web',
    description:
      'Pencatatan tamu digital dengan QR code check-in dan laporan statistik kunjungan.',
    tech: ['React', 'Tailwind'],
    demo: '#'
  },
  {
    title: 'Web Company Profile',
    description:
      'Website profil perusahaan yang responsif dan dioptimalkan untuk pencarian.',
    tech: ['React', 'Tailwind'],
    demo: '#'
  },
];

const ProjectCard = ({ project }) => (
  <div
    className="bg-surface-container-lowest w-full rounded-xl p-xl border border-secondary/10"
    style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)' }}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 mb-md flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">work</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">
      {project.title}
    </h3>
    <p className="font-body-md text-body-md text-on-surface-variant mb-md">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-xs mb-md">
      {project.tech.map((tag) => (
        <span
          key={tag}
          className="text-label-sm text-on-secondary-fixed bg-surface-container-low px-xs py-xs rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={project.demo || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-xs bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-primary/90 transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="material-symbols-outlined">language</span>
      Demo Website
    </a>
  </div>
);

const PortofolioModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest max-w-max-width-card w-full max-h-[85vh] m-4 rounded-xl p-xl overflow-y-auto border border-secondary/10"
        style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-lg">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            Portofolio
          </h1>
          <button
            type="button"
            onClick={onClose}
            className="text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-lg text-center">
          Proyek yang pernah saya kembangkan menggunakan low-code, no-code, dan
          AI tools.
        </p>
        <div className="flex flex-col gap-md w-full">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortofolioModal;
