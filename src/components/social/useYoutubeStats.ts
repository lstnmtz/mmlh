import { useState, useEffect } from 'react';

export function useYoutubeStats() {
  const [subscribers, setSubscribers] = useState<string | null>(null);
  const [views, setViews] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const CHANNEL_ID = "UCzATYl4teFwk-oseWOkBNTQ";
  const API_KEY = "AIzaSyBB2djYLwOQAfAcgxgIwjq3dI71UsjSsvw";

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

  return { subscribers, views, lastUpdate };
}