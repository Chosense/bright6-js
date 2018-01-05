

/**
 * The entry point for working with Bright 6 data in a SharePoint Online site.
 */
export class AppContext {
    /**
     * Creates a new instance of the context class.
     * @param siteUrl The full URL to the SharePoint Online modern site that contains the Bright 6 data to work with or to create.
     */
    constructor(siteUrl: string) {
        
        this._url = siteUrl;
    }

    private _url: string;

    
}