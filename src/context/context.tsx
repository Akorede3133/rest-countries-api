import { createContext, useContext, useState } from "react";
interface contextProps {
    countries: countryProp[];
    dark: boolean;
    text: string;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    searching: boolean;
    setSearching: React.Dispatch<React.SetStateAction<boolean>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
    setCountries:React.Dispatch<React.SetStateAction<countryProp[]>>;

}
interface childrenProp {
    children: React.ReactNode;
}
export interface currencyProp {
    name: string;
    code: string;
    symbol: string;
}
export interface languageProp {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}
interface translationProps {
    br: string;
    de: string;
    es: string;
    fa: string;
    fr: string;
    hr: string;
    hu: string;
    it: string;
    ja: string;
    nl: string;
    pt: string;
}
interface flagProps {
    svg: string;
    png: string
}
interface blocsProps {
    acronym: string;
    name: string;
    otherNames: string[];
}
  export interface countryProp {
    name: string;
    area?: number;
    capital: string;
    borders?: string[];
    currencies?: currencyProp[];
    flag: string;
    languages?: languageProp[];
    population: number;
    region: string;
    subregion?: string;
    topLevelDomain?: string;
    alpha2code?: string;
    alpha3code?: string;
    altSpellings?: string;
    callingCodes?: string[];
    cioc?: string;
    demonym?: string;
    flags?: flagProps;
    gini?: number;
    independent?: boolean;
    latlng?: number[];
    nativeName?: string;
    numericCode?: string;
    regionalBlocs?: blocsProps[];
    timeZones?: string[];
    translations?: translationProps;
  }
const globalContext = createContext({} as contextProps); 

const AppContext = ({ children }: childrenProp) => {
    const [dark, setDark] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [searching, setSearching] = useState<boolean>(false)
    const [countries, setCountries] = useState<countryProp[]>([] as countryProp[])
    return <globalContext.Provider value={{
        countries,
        dark,
        text,
        loading,
        searching,
        setSearching,
        setLoading,
        setText,
        setDark,
        setCountries,
    }}>
        {children}
    </globalContext.Provider>
}
const useGlobalContext = () => {
    return useContext(globalContext);
}
export { useGlobalContext, AppContext, globalContext }