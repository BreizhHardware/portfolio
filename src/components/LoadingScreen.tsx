import React, { useState, useEffect, useRef } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Félix MARQUET";
  const [isComplete, setIsComplete] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentAsset, setCurrentAsset] = useState('Initialisation...');
  
  const typingRef = useRef<{
    currentIndex: number;
    timeout: NodeJS.Timeout | null;
    isTyping: boolean;
  }>({
    currentIndex: 0,
    timeout: null,
    isTyping: false
  });

  useEffect(() => {
    let loadedCount = 0;
    let totalCount = 0;
    
    const updateProgress = () => {
      const progress = totalCount > 0 ? (loadedCount / totalCount) * 100 : 0;
      setLoadingProgress(progress);
      
      if (loadedCount === totalCount && totalCount > 0) {
        setAssetsLoaded(true);
        setCurrentAsset('Prêt !');
      }
    };

    const incrementLoaded = (assetName?: string) => {
      loadedCount++;
      if (assetName) {
        setCurrentAsset(`Chargé: ${assetName}`);
      }
      updateProgress();
    };

    const checkAssets = async () => {
      const assetsToCheck = [
        { url: 'https://1.gravatar.com/avatar/4d43af207280d1d23e2a2905577c7b6167723fec2d33f946cc86f114c1a85b8d?size=256', name: 'Photo de profil' },
        { url: '/V5.png', name: 'Favicon' },
        { url: '/CV-Felix-MARQUET.pdf', name: 'CV Français' },
        { url: '/CV-Felix-MARQUET-English.pdf', name: 'CV Anglais' },
        { url: '/locales/fr/translation.json', name: 'Traductions FR' },
        { url: '/locales/en/translation.json', name: 'Traductions EN' }
      ];

      totalCount = assetsToCheck.length + 1; 

      setCurrentAsset('Chargement des polices...');
      try {
        await document.fonts.ready;
        incrementLoaded('Polices');
      } catch (error) {
        incrementLoaded('Polices');
      }

      for (const asset of assetsToCheck) {
        setCurrentAsset(`Chargement: ${asset.name}...`);
        
        if (asset.url.endsWith('.json')) {
          try {
            const response = await fetch(asset.url);
            if (response.ok) {
              incrementLoaded(asset.name);
            } else {
              incrementLoaded(asset.name);
            }
          } catch (error) {
            incrementLoaded(asset.name);
          }
        } else if (asset.url.endsWith('.pdf')) {
          try {
            const response = await fetch(asset.url, { method: 'HEAD' });
            incrementLoaded(asset.name);
          } catch (error) {
            incrementLoaded(asset.name);
          }
        } else {
          await new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              incrementLoaded(asset.name);
              resolve();
            };
            img.onerror = () => {
              incrementLoaded(asset.name);
              resolve();
            };
            img.src = asset.url;
          });
        }
      }

      setTimeout(() => {
        if (!assetsLoaded) {
          loadedCount = totalCount;
          setAssetsLoaded(true);
          setLoadingProgress(100);
          setCurrentAsset('Prêt !');
        }
      }, 5000);
    };

    const timeout = setTimeout(() => {
      checkAssets();
    }, 100);

    return () => clearTimeout(timeout);
  }, [assetsLoaded]);

  const startTyping = () => {
    if (typingRef.current.isTyping) return;
    
    typingRef.current.isTyping = true;
    
    const typeNextChar = () => {
      if (typingRef.current.currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, typingRef.current.currentIndex));
        typingRef.current.currentIndex++;
        
        const delay = assetsLoaded ? 30 : 150;
        typingRef.current.timeout = setTimeout(typeNextChar, delay);
      } else {
        setIsComplete(true);
        typingRef.current.isTyping = false;
        
        const finalDelay = assetsLoaded ? 200 : 800;
        setTimeout(() => {
          onLoadingComplete();
        }, finalDelay);
      }
    };
    
    typeNextChar();
  };

  useEffect(() => {
    startTyping();
    
    return () => {
      if (typingRef.current.timeout) {
        clearTimeout(typingRef.current.timeout);
      }
    };
  }, []);

  useEffect(() => {
    if (assetsLoaded && typingRef.current.isTyping && !isComplete) {
      if (typingRef.current.timeout) {
        clearTimeout(typingRef.current.timeout);
      }
      
      typingRef.current.isTyping = false;
      setTimeout(() => startTyping(), 10);
    }
  }, [assetsLoaded, isComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50 transition-all duration-1000">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white mb-8">
          {displayText}
          {showCursor && !isComplete && <span className="animate-pulse">|</span>}
        </div>
        <div className="flex space-x-2 justify-center mb-4">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        <p className="text-white/80 text-lg">
          {assetsLoaded ? 'Prêt !' : currentAsset}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
