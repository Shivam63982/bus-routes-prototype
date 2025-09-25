export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    "isbt-ronkta": [
      { "lat": 27.2010, "lon": 78.0120 },
      { "lat": 27.2050, "lon": 78.0150 },
      { "lat": 27.2100, "lon": 78.0200 },
      { "lat": 27.2200, "lon": 78.0300 },
      { "lat": 27.2300, "lon": 78.0400 },
      { "lat": 27.2400, "lon": 78.0450 },
      { "lat": 27.2500, "lon": 78.0500 }
    ],
    "khandari-bhagwan": [
      { "lat": 27.1910, "lon": 78.0220 },
      { "lat": 27.1950, "lon": 78.0250 },
      { "lat": 27.2000, "lon": 78.0280 },
      { "lat": 27.2050, "lon": 78.0320 },
      { "lat": 27.2150, "lon": 78.0370 },
      { "lat": 27.2200, "lon": 78.0400 }
    ]
  });
}
