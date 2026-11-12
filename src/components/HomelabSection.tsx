import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FaServer, FaDocker, FaCloud } from 'react-icons/fa';
import Reveal from './Reveal';
import Counter from './Counter';
import data from '../assets/DATA';

const HomelabSection: React.FC = () => {
  const { t } = useTranslation();
  const { stats, nodes, tools } = data.homelab;
  return (
    <div className="max-w-5xl mx-auto mt-16 px-2" id="homelab">
      <Reveal className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{t('homelab.title')}</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('homelab.subtitle')}</p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 text-center max-w-xl mx-auto">
        {stats.map(s => (
          <Reveal key={s.key}>
            <div className="p-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              <div className="text-3xl md:text-5xl font-extrabold text-blue-500"><Counter to={s.value} /></div>
              <div className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-400">{t(`homelab.stats.${s.key}`)}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 relative">
        <motion.div
          aria-hidden
          className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {nodes.map((n, i) => (
            <motion.div
              key={n.name}
              className="p-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-center"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 18 }}
              whileHover={{ y: -4, borderColor: 'rgb(59 130 246)' }}
            >
              <div className="relative inline-block">
                <FaServer className="text-3xl text-gray-800 dark:text-gray-200" />
                <motion.span
                  aria-hidden
                  className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                />
              </div>
              <div className="mt-2 font-bold text-gray-800 dark:text-gray-200">{n.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{n.role}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal className="mt-6">
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map(tool => (
            <span key={tool} className="inline-flex items-center gap-2 px-4 py-1 border-2 rounded-full text-gray-700 dark:text-gray-300">
              {tool === 'Docker' ? <FaDocker /> : <FaCloud />} {tool}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default HomelabSection;
