import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  link: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, title, description, details, tags, link }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-800 p-6 md:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={onClose} aria-label={t('projects.close')} className="absolute top-4 right-4 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <FaTimes />
            </button>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white pr-10">{title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
            <ul className="mt-5 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
              {details.map(d => <li key={d}>{d}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map(tag => <span key={tag} className="px-3 py-1 text-sm border-2 rounded-full dark:text-gray-300">{tag}</span>)}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors">
              {t('projects.visit')} <FaExternalLinkAlt size={12} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
