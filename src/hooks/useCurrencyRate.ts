import { useState, useEffect } from 'react';

interface CurrencyRates {
  usd: number;
  eur: number;
  lastUpdated: string;
}

export const useCurrencyRate = () => {
  const [rates, setRates] = useState<CurrencyRates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // TCMB API kullanarak dolar ve euro kurlarını al
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/TRY');
        
        if (!response.ok) {
          throw new Error('Kur bilgisi alınamadı');
        }

        const data = await response.json();
        
        setRates({
          usd: 1 / data.rates.USD, // TRY to USD
          eur: 1 / data.rates.EUR, // TRY to EUR
          lastUpdated: new Date().toLocaleString('tr-TR')
        });
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Kur bilgisi alınamadı');
        // Fallback kurlar
        setRates({
          usd: 34.50,
          eur: 37.20,
          lastUpdated: 'Çevrimdışı veri'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    
    // Her 30 dakikada bir güncelle
    const interval = setInterval(fetchRates, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { rates, loading, error };
};