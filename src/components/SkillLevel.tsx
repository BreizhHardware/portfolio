import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SkillLevelProps {
    level: number;
    skillName: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ level, skillName }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const badgeRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    // Determine skill level text based on numeric value
    let skillLevelText;

    if (level < 60) {
        skillLevelText = t('skills.beginner');
    } else if (level < 80) {
        skillLevelText = t('skills.intermediate');
    } else {
        skillLevelText = t('skills.expert');
    }

    const calculatePosition = () => {
        if (badgeRef.current && tooltipRef.current) {
            const badgeRect = badgeRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();

            // Center tooltip horizontally
            const left = badgeRect.left + (badgeRect.width / 2) - (tooltipRect.width / 2);

            // Position tooltip directly below the badge (reduce gap)
            const top = badgeRect.bottom + 5;

            // Ensure tooltip stays within viewport
            const adjustedLeft = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));

            setTooltipPosition({ top, left: adjustedLeft });
        }
    };

    useEffect(() => {
        if (showTooltip) {
            calculatePosition();
            // Recalculate position on window resize
            window.addEventListener('resize', calculatePosition);
            window.addEventListener('scroll', calculatePosition);

            return () => {
                window.removeEventListener('resize', calculatePosition);
                window.removeEventListener('scroll', calculatePosition);
            };
        }
    }, [showTooltip]);

    const handleTouch = (e: React.TouchEvent) => {
        e.preventDefault();
        setShowTooltip(!showTooltip);
    };

    return (
        <div className="mt-2">
            <div
                ref={badgeRef}
                className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 border cursor-pointer dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onTouchStart={handleTouch}
            >
                {skillLevelText}
            </div>

            {showTooltip && (
                <div
                    ref={tooltipRef}
                    className="fixed z-50 w-64 p-3 text-sm bg-gray-200 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:shadow-lg dark:bg-gray-800 dark:text-gray-200 transition-shadow"
                    style={{
                        top: `${tooltipPosition.top}px`,
                        left: `${tooltipPosition.left}px`,
                    }}
                >
                    <p className="font-bold mb-1">{t(`skills.examples.${skillName}.title`)}</p>
                    <p>{t(`skills.examples.${skillName}.description`)}</p>
                </div>
            )}
        </div>
    );
};

export default SkillLevel;