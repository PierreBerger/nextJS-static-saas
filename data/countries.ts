import { Country } from "../models/country";

export const countries: Country[] = [
    {
      id: 'france',
      name: 'France',
      background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Manneporte_en_soir.jpg/2560px-Manneporte_en_soir.jpg',
      url: 'france.fr',
      favicon: 'france.png'
    },
    {
      id: 'deutschland',
      name: 'Deutschland',
      background: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Rheinstein.jpg',
      url: 'deutschland.de',
      favicon: 'deutschland.png' 
    },
    {
      id: 'usa',
      name: 'United States of America',
      background: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Statue_of_Liberty%2C_NY_%28cropped%29.jpg',
      url: 'usa.us',
      favicon: 'usa.png'
    }
]