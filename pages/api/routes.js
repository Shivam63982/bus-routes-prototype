export default function handler(req, res) {
  // Allow any origin (for dev/prototype)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const data = {
    routes: [
      {
        route_name: "isbt-ronkta",
        bus_id: "bus_id43",
        initial_stop: { name: "ISBT", lat: 27.2, lon: 78.01 },
        final_stop: { name: "Ronkta", lat: 27.25, lon: 78.05 }
      },
      {
        route_name: "khandari-bhagwan",
        bus_id: "bus_id87",
        initial_stop: { name: "Khandari", lat: 27.19, lon: 78.02 },
        final_stop: { name: "Bhagwan Talkies", lat: 27.22, lon: 78.04 }
      }
    ]
  };

  res.status(200).json(data);
}
