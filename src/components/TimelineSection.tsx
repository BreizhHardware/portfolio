import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface TimelineItem {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  current?: boolean;
}

const TimelineSection: React.FC<{ experience: TimelineItem[] }> = ({ experience }) => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 80%', 'end 60%'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 25, mass: 0.3 });
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <FaBriefcase className="text-blue-500" />;
      case 'education':
        return <FaGraduationCap className="text-green-500" />;
      case 'achievement':
        return <FaCalendarAlt className="text-purple-500" />;
      default:
        return <FaBriefcase className="text-gray-500" />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-50 dark:bg-blue-900/20 border-l-blue-500';
      case 'education':
        return 'bg-green-50 dark:bg-green-900/20 border-l-green-500';
      case 'achievement':
        return 'bg-purple-50 dark:bg-purple-900/20 border-l-purple-500';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-l-gray-500';
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-16" id="experience">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {t('experience.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('experience.description')}
        </p>
      </div>

      <div className="relative" ref={trackRef}>
        {/* Ligne verticale : rail + remplissage lié au scroll */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <motion.div
          aria-hidden
          className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"
          style={{ scaleY: reduce ? 1 : lineScale }}
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={item.id} className="relative pl-12 md:pl-20">
              {/* Icône */}
              <motion.div
                className="absolute left-1 md:left-5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center"
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {item.current && !reduce && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-green-500/40"
                    animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
                  />
                )}
                <div className="text-sm relative">
                  {getIcon(item.type)}
                </div>
              </motion.div>

              {/* Contenu */}
              <motion.div
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 ${getBackgroundColor(item.type)}`}
                initial={reduce ? false : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {t(`experience.items.${index}.title`)}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    {item.current && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                        {t('experience.current')}
                      </span>
                    )}
                    <span className="flex items-center space-x-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{t(`experience.items.${index}.startDate`)} - {t(`experience.items.${index}.endDate`)}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {t(`experience.items.${index}.organization`)}
                  </h4>
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaMapMarkerAlt className="mr-1" />
                    {t(`experience.items.${index}.location`)}
                  </span>
                </div>

                <ul className="space-y-1 mb-4">
                  {item.description.map((_, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 flex items-start"
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + idx * 0.1, duration: 0.4 }}
                    >
                      <span className="text-blue-500 mr-2 mt-1.5">•</span>
                      <span>{t(`experience.items.${index}.description.${idx}`)}</span>
                    </motion.li>
                  ))}
                </ul>

                {item.technologies && (
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('experience.technologies')}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((_, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.06, type: 'spring', stiffness: 300, damping: 18 }}
                          whileHover={{ y: -2, scale: 1.08 }}
                        >
                          {t(`experience.items.${index}.technologies.${idx}`)}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
