import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | 'loading' | null;
  message: string;
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    // Simulation d'envoi (en production, remplacer par un vrai service)
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="max-w-4xl mx-auto mt-16" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          📧 Contact
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Informations de contact
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="text-gray-800 dark:text-gray-200">felix.marquet@isen-ouest.yncrea.fr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaUser className="text-green-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Statut</p>
                  <p className="text-gray-800 dark:text-gray-200">Étudiant ISEN - Alternant chez Horoquartz</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaCommentDots className="text-purple-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Réponse</p>
                  <p className="text-gray-800 dark:text-gray-200">Généralement sous 24h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Sujets d'intérêt
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Développement Web',
                'Administration Système',
                'DevOps',
                'Alternance',
                'Projets Open Source',
                'Homelab',
                'Collaboration',
                'Stage/Emploi'
              ].map((subject, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Envoyez-moi un message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all"
                placeholder="Votre nom"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all"
                placeholder="votre.email@exemple.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all"
                placeholder="Objet de votre message"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all resize-none"
                placeholder="Votre message..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={!isFormValid || status.type === 'loading'}
              className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-white font-medium transition-all ${
                isFormValid && status.type !== 'loading'
                  ? 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-95'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {status.type === 'loading' ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>
          </form>
          
          {/* Status message */}
          {status.type && (
            <div className={`mt-4 p-3 rounded-md flex items-center space-x-2 animate-fadeInUp ${
              status.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
              status.type === 'error' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
              'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
            }`}>
              {status.type === 'success' && <FaCheckCircle />}
              {status.type === 'loading' && <FaSpinner className="animate-spin" />}
              <span className="text-sm">{status.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
