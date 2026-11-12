import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FaShieldAlt, FaNetworkWired, FaBug, FaLock, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import Reveal from './Reveal';
import data from '../assets/DATA';

const icons = [FaNetworkWired, FaBug, FaLock, FaShieldAlt];

const CyberSection: React.FC = () => {
  const { t } = useTranslation();
  const areas = t('cyber.areas', { returnObjects: true }) as { title: string; description: string }[];
  return (
    <div className="max-w-5xl mx-auto mt-16 px-2" id="cyber">
      <Reveal className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{t('cyber.title')}</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('cyber.subtitle')}</p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.isArray(areas) && areas.map((area, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={area.title} delay={(i % 2) * 0.1}>
              <motion.div
                className="h-full p-5 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
                whileHover={{ y: -4, borderColor: 'rgb(34 197 94)' }}
              >
                <Icon className="text-2xl text-green-500" />
                <h3 className="mt-3 text-lg font-bold text-gray-800 dark:text-gray-200">{area.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{area.description}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-8">
        <div className="p-5 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-gray-200">
            <FaCertificate className="text-yellow-500" /> {t('cyber.certifications.title')}
          </h3>
          {data.certifications.length === 0 ? (
            <p className="mt-2 text-gray-600 dark:text-gray-400 flex items-center gap-2"><FaGraduationCap /> {t('cyber.certifications.empty')}</p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {data.certifications.map(c => (
                <li key={c.name} className="px-4 py-1 rounded-full border-2 text-gray-700 dark:text-gray-300">
                  {c.name} <span className="text-xs opacity-70">· {t(`cyber.status.${c.status}`)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default CyberSection;
