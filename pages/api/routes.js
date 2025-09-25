import routes from "../../routes.json";

export default function handler(req, res) {
  res.status(200).json(routes);
}
