export type CountryType = {
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
    region: string;
    population: number;
}


/**
 * Visualizzare:
Nome (attributo: name.common)
Bandiera (attributo: flags.svg)
Regione (attributo: region)
Popolazione (attributo: population)
Capitale (attributo: capital[0])
Lingue (attributo: languages)
Valute (attributo: currencies) --> "currencies": {
      "SHP": {
        "name": "Saint Helena pound",
        "symbol": "£"
      }
Confini con altri paesi (attributo: borders)
Fusi orari (attributo: timezones)
Codice della chiamata internazionale (attributo: idd.root + idd.suffixes)
 */

export type CountryDetailsType = {
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
    region: string;
    population: number;
    capital: string[];
    languages: {
        [key: string]: string;
    };
    currencies: {
        [key: string]: string;
    };
    borders: string[];
    timezones: string[];
    idd: {
        root: string;
        suffixes: string[];
    };
}