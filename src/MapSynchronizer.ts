import * as azmaps from 'azure-maps-control';

/** A class that synchronizes the cameras of two or more maps. */
export class MapSynchronizer {

    ///////////////////////////
    // Private properties
    ///////////////////////////

    private _maps: azmaps.Map[];
    private _syncEvents: any[] = [];
    private _enabled: boolean = true;

    ///////////////////////////
    // Constructor
    ///////////////////////////

    /**
     * A class that synchronizes the cameras of two or more maps.
     * @param maps An array of two or more maps to synchronize. 
     */
    constructor(maps: azmaps.Map[]) {
        this._maps = maps;

        //Bind sync events.
        maps.forEach((map, index) => {
            this._syncEvents[index] = this._synchronizeMaps.bind(this, map);
        });

        //Sync all map views with the first map.
        this._syncEvents[0]();

        //Attach the map move handler.
        this._attachMapChangeHandlers();
    }

    ///////////////////////////
    // Public methods
    ///////////////////////////

    /** Disposes the map synchronizer. */
    public dispose() {
        this._detachMapChangeHandlers();
        this._maps = null;
        this._syncEvents = null;
        this._enabled = null;
    }

    /**
     * Get sthe enabled state.
     */
    public isEnabled(): boolean {
        return this._enabled;
    }

    /** Disables the synchronization of the maps. */
    public disable(): void {
        this._enabled = false;
        this._detachMapChangeHandlers();
    }

    /** Enables the synchronization of the maps. */
    public enable(): void {
        this._enabled = true;
        this._attachMapChangeHandlers();
    }

    ///////////////////////////
    // Private methods
    ///////////////////////////

    /** Attach map move handlers to the maps to synchronize them. */
    private _attachMapChangeHandlers() {
        if (this._maps) {
            this._maps.forEach((map, index) => {
                map.events.add('move', this._syncEvents[index]);
                map.events.add('styledata', this._syncEvents[index]);
            });
        }
    }

    /** Detach map move handlers to the maps. */
    private _detachMapChangeHandlers() {
        if (this._maps) {
            this._maps.forEach((map, index) => {
                map.events.remove('move', this._syncEvents[index]);
                map.events.remove('styledata', this._syncEvents[index]);
            });
        }
    }

    /**
     * Synchronize all maps with a base map.
     * @param baseMap The base map to synchronize with. 
     */
    private _synchronizeMaps(baseMap: azmaps.Map) {
        if (this._maps && this._enabled) {
            let targetMaps = this._maps.filter(m => { return m !== baseMap; });

            this._detachMapChangeHandlers();
            let cam = baseMap.getCamera();

            targetMaps.forEach(function (targetMap) {
                targetMap.setCamera({
                    center: cam.center,
                    zoom: cam.zoom,
                    bearing: cam.bearing,
                    pitch: cam.pitch,
                    type: 'jump'
                });
            });
            this._attachMapChangeHandlers();
        }
    }
}