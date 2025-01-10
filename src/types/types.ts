/**
 * Definizione del tipo `CountryType` per un singolo paese.
 * Utilizzato per tipizzare i dati relativi ai paesi recuperati dall'API.
*/

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
 * Definizione del tipo `CountryDetailsType` per un singolo paese.
 * Utilizzato per tipizzare i dati relativi ai dettagli dei paesi recuperati dall'API.
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
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    borders: string[];
    timezones: string[];
    idd: {
        root: string;
        suffixes: string[];
    };
}