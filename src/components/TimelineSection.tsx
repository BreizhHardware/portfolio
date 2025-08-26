import React from 'react';
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
          🎯 Parcours & Expérience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Mon évolution professionnelle et académique
        </p>
      </div>

      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className={`relative pl-12 md:pl-20 animate-fadeInUp`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icône */}
              <div className="absolute left-1 md:left-5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                <div className="text-sm">
                  {getIcon(item.type)}
                </div>
              </div>

              {/* Contenu */}
              <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover border-l-4 ${getBackgroundColor(item.type)}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    {item.current && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                        En cours
                      </span>
                    )}
                    <span className="flex items-center space-x-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{item.startDate} - {item.endDate}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {item.organization}
                  </h4>
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaMapMarkerAlt className="mr-1" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-1 mb-4">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {item.technologies && (
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Technologies utilisées :
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
