type webSettings = {
    id : number,
    venueId :number,
    bannerImage: string,
    backgroundColour :string,
    primaryColour: string,
    primaryColourHover : string,
    navBackgroundColour: string
}

type branding = {
    id: string,
    name: string,
    internalName: string,
    description: string,
    liveFlag: string,
    demoFlag: number,
    address1: string,
    address2: string | null,
    address3: string | null,
    city: string,
    county: string,
    postcode: string,
    country: string,
    timezoneOffset: string,
    locale: string,
    timeZone: string,
    webSettings: webSettings
    ccy: string,
    cySymbol: string,
    currency: string
 }
  
type brandingType = {
    currentBrand: branding | null;
    loading: boolean;
    error: string | null;
}
  


export type { branding, brandingType }  