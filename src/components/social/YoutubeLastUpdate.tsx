import React from 'react';
import { useYoutubeStats } from './useYoutubeStats';

const formatDate = (date: Date | null) =>
  date
    ? date.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

export function YoutubeLastUpdate() {
  const { lastUpdate } = useYoutubeStats();

  if (!lastUpdate) return null;

  return (
    <p className="text-xs text-neutral-medium mt-2">
      Dernière actualisation&nbsp;: {formatDate(lastUpdate)}
    </p>
  );
}