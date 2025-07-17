// src/components/StatsHeader.jsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ children, style }) => (
  <div
    className="p-4 bg-white rounded-lg shadow transform"
    style={style}
  >
    {children}
  </div>
);

export default function StatsHeader({
  productsMade = 64,
  clubsUsing = 2,
}) {
  const { t } = useTranslation('global');
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // generate random-like offsets for desktop
    setPositions([
      { top: '10%', left: '60%', rotate: '-3deg' },
      { top: '25%', left: '75%', rotate: '4deg' },
      { top: '40%', left: '20%', rotate: '-2deg' },
    ]);
  }, []);

  return (
    <div className="relative w-full bg-transparent py-8">
      {/* Mobile stacked */}
      <div className="flex flex-col items-center space-y-4 md:hidden">
        <Card>
          <p className="text-2xl font-bold text-pink-800">{productsMade.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{t('stats.products_made')}</p>
        </Card>
        <Card>
          <p className="text-2xl font-bold text-pink-800">{clubsUsing.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{t('stats.clubs_using')}</p>
        </Card>
        <Card>
          <p className="text-lg italic text-gray-700 text-center">{t('stats.tagline')}</p>
        </Card>
      </div>

      {/* Desktop floating */}
      <div className="hidden md:block relative w-full h-10">
        <Card
          style={{
            position: 'absolute',
            top: positions[0]?.top,
            left: positions[0]?.left,
            transform: `rotate(${positions[0]?.rotate})`,
          }}
        >
          <p className="text-2xl font-bold text-pink-800">{productsMade.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{t('stats.products_made')}</p>
        </Card>

        <Card
          style={{
            position: 'absolute',
            top: positions[1]?.top,
            left: positions[1]?.left,
            transform: `rotate(${positions[1]?.rotate})`,
          }}
        >
          <p className="text-2xl font-bold text-pink-800">{clubsUsing.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{t('stats.clubs_using')}</p>
        </Card>

        <Card
          style={{
            position: 'absolute',
            top: positions[2]?.top,
            left: positions[2]?.left,
            transform: `rotate(${positions[2]?.rotate})`,
          }}
        >
          <p className="text-lg italic text-gray-700 text-center">{t('stats.tagline')}</p>
        </Card>
      </div>
    </div>
);
}