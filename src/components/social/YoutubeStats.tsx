import React from 'react';
import { useYoutubeStats } from './useYoutubeStats';

const formatNumber = (num: string | null) =>
  num ? Number(num).toLocaleString('fr-FR') : '';

export function YoutubeStats() {
  const { subscribers, views } = useYoutubeStats();

  if (!subscribers && !views) return <p>...</p>;

  return (
    <div className="bg-neutral-light p-6 rounded-lg text-center">
      <div className="text-pink-dark text-4xl mb-2">{formatNumber(views)}</div>
      <p>Vues YouTube</p>
      <p className="text-sm text-neutral-dark">{formatNumber(subscribers)} Abonnés</p>
    </div>
  );
}