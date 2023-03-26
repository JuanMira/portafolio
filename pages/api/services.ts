import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";
import { IServices } from "../../type";

interface Response {
  services: IServices[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ services });
}
