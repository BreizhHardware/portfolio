import React, { useState } from 'react';
import { FaServer, FaDocker, FaLinux, FaNetworkWired, FaHdd, FaMicrochip } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ServerSpec {
  name: string;
  model: string;
  cpu: string;
  ram: string;
  storage: string;
  os: string;
  services: string[];
  status: 'online' | 'offline' | 'maintenance';
}

const HomelabSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'overview' | 'servers' | 'services'>('overview');

  const servers: ServerSpec[] = [
    {
      name: "DELL T320",
      model: "PowerEdge T320",
      cpu: "Intel Xeon E5-2400 series",
      ram: "32GB DDR3",
      storage: "4x 1TB HDD RAID 10",
      os: "Proxmox VE",
      services: ["Proxmox", "Docker", "VM Management", "Backup Server"],
      status: 'online'
    },
    {
      name: "DELL T330",
      model: "PowerEdge T330",
      cpu: "Intel Xeon E3-1200 series", 
      ram: "64GB DDR4",
      storage: "6x 2TB HDD + 2x 500GB SSD",
      os: "Proxmox VE",
      services: ["Media Server", "Development Environment", "CI/CD", "Monitoring"],
      status: 'online'
    }
  ];

  const services = [
    { name: "Proxmox Cluster", icon: <FaServer />, description: "Virtualisation et orchestration" },
    { name: "Docker Swarm", icon: <FaDocker />, description: "Conteneurisation des services" },
    { name: "Monitoring Stack", icon: <FaNetworkWired />, description: "Grafana + Prometheus + Alertmanager" },
    { name: "Backup Solution", icon: <FaHdd />, description: "Sauvegarde automatisée 3-2-1" },
    { name: "Development Lab", icon: <FaMicrochip />, description: "Environnements de développement isolés" },
    { name: "Media Center", icon: <FaLinux />, description: "Streaming et gestion multimédia" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'maintenance': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'En ligne';
      case 'offline': return 'Hors ligne';
      case 'maintenance': return 'Maintenance';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          🏠 Mon Homelab
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Infrastructure personnelle et laboratoire de développement
        </p>
      </div>

      {/* Navigation tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {['overview', 'servers', 'services'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {tab === 'overview' ? 'Vue d\'ensemble' : tab === 'servers' ? 'Serveurs' : 'Services'}
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="animate-fadeInUp">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Serveurs</p>
                </div>
                <FaServer className="text-blue-500 text-2xl" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">96GB</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">RAM Total</p>
                </div>
                <FaMicrochip className="text-green-500 text-2xl" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">16TB</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stockage</p>
                </div>
                <FaHdd className="text-purple-500 text-2xl" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">24/7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Uptime</p>
                </div>
                <FaNetworkWired className="text-orange-500 text-2xl" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'servers' && (
          <div className="space-y-6">
            {servers.map((server, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <FaServer className="text-2xl text-blue-500" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{server.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{server.model}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(server.status)}`}></div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {getStatusText(server.status)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">CPU</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">{server.cpu}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">RAM</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">{server.ram}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Stockage</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">{server.storage}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {server.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-2xl text-blue-500">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{service.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomelabSection;
