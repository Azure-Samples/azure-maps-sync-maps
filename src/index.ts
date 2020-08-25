import * as azmaps from 'azure-maps-control';
import { MapSynchronizer } from './MapSynchronizer';

/**
 * Synchronizes the cameras of two or more maps.
 * @param maps An array of two or more maps to synchronize. 
 */
export function syncMaps(...maps: azmaps.Map[]): MapSynchronizer {
    //Allow maps to be passed in as arguments or as an array.
    if (Array.isArray(maps) && maps.length > 0 && Array.isArray(maps[0])) {
        //@ts-ignore
        maps = <azmaps.Map[]>maps[0];
    }
    return new MapSynchronizer(maps);
}