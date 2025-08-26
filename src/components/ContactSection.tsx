import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: null });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error('Missing required EmailJS environment variables:', {
        VITE_EMAILJS_SERVICE_ID: serviceId,
        VITE_EMAILJS_TEMPLATE_ID: templateId,
        VITE_EMAILJS_USER_ID: userId
      });
      setStatus({ type: 'error' });
      return;
    }
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;
      if (!publicKey) {
        console.error('EmailJS Error: VITE_EMAILJS_USER_ID is not defined.');
        setStatus({ type: 'error' });
        return;
      }
      await emailjs.init({ publicKey });
      await emailjs.send(serviceId, templateId, templateParams);
      setStatus({
        type: 'success'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error'
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="max-w-4xl mx-auto mt-16" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.info.email')}</p>
                  <p className="text-gray-800 dark:text-gray-200">felix.marquet@isen-ouest.yncrea.fr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaUser className="text-green-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.info.status')}</p>
                  <p className="text-gray-800 dark:text-gray-200">{t('contact.info.statusValue')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaCommentDots className="text-purple-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.info.response')}</p>
                  <p className="text-gray-800 dark:text-gray-200">{t('contact.info.responseValue')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {t('contact.subjects.title')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(t('contact.subjects.list', { returnObjects: true }) as string[]).map((subject, index) => (
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
            {t('contact.form.title')}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all"
                placeholder={t('contact.form.namePlaceholder')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all"
                placeholder={t('contact.form.emailPlaceholder')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all"
                placeholder={t('contact.form.subjectPlaceholder')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
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
                  <span>{t('contact.form.sending')}</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>{t('contact.form.send')}</span>
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
              <span className="text-sm">
                {status.type === 'success' && t('contact.form.success')}
                {status.type === 'error' && t('contact.form.error')}
                {status.type === 'loading' && t('contact.form.sending')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
