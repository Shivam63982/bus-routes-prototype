export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const data = {
    "isbt-ronkta": [
      { lat: 27.201, lon: 78.012 },
      { lat: 27.205, lon: 78.015 },
      { lat: 27.21, lon: 78.02 },
      { lat: 27.22, lon: 78.03 },
      { lat: 27.23, lon: 78.04 },
      { lat: 27.24, lon: 78.045 },
      { lat: 27.25, lon: 78.05 }
    ],
    "khandari-bhagwan": [
      { lat: 27.191, lon: 78.022 },
      { lat: 27.195, lon: 78.025 },
      { lat: 27.2, lon: 78.028 },
      { lat: 27.205, lon: 78.032 },
      { lat: 27.215, lon: 78.037 },
      { lat: 27.22, lon: 78.04 }
    ]
  };

  res.status(200).json(data);
}
