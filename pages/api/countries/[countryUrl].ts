import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from '../../../data/countries';
import { Country } from '../../../models/country';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Country>
) {
  const { countryUrl } = req.query;
  
  res.status(200).json(countries.find(country => country.url === countryUrl)!);
}
