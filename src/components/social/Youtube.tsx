import React, { useState, useEffect } from 'react';

function YoutubeSubscribers() {
  const [subscribers, setSubscribers] = useState<string | null>(null);
  const [views, setViews] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const CHANNEL_ID = "UCzATYl4teFwk-oseWOkBNTQ";
  const API_KEY = "AIzaSyBB2djYLwOQAfAcgxgIwjq3dI71UsjSsvw";

  // Fonction pour formater les nombres avec des espaces
  const formatNumber = (num: string | null) =>
    num ? Number(num).toLocaleString('fr-FR') : '';

  // Fonction pour formater la date et l'heure
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

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items[0]) {
          setSubscribers(data.items[0].statistics.subscriberCount);
          setViews(data.items[0].statistics.viewCount);
          setLastUpdate(new Date());
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {subscribers ? (
        <>
          <div className="bg-neutral-light p-6 rounded-lg text-center">
            <div className="text-pink-dark text-4xl mb-2">{formatNumber(views)}</div>
            <p>Vues YouTube</p>
            <p className="text-sm text-neutral-dark">{formatNumber(subscribers)} Abonnés</p>
            <p className="text-xs text-neutral-medium mt-2">
              Dernière actualisation&nbsp;: {formatDate(lastUpdate)}
            </p>
          </div>
        </>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}

export default YoutubeSubscribers;
