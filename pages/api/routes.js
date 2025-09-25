export default function handler(req, res) {
  // Allow CORS for any origin (good for prototype)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    "routes": [
      {
        "route_name": "isbt-ronkta",
        "bus_id": "bus_id43",
        "initial_stop": { "name": "ISBT", "lat": 27.2000, "lon": 78.0100 },
        "final_stop": { "name": "Ronkta", "lat": 27.2500, "lon": 78.0500 }
      },
      {
        "route_name": "khandari-bhagwan",
        "bus_id": "bus_id87",
        "initial_stop": { "name": "Khandari", "lat": 27.1900, "lon": 78.0200 },
        "final_stop": { "name": "Bhagwan Talkies", "lat": 27.2200, "lon": 78.0400 }
      }
    ]
  });
}
