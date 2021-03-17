import useFetch from './useFetch';
import { currentLocationURL } from '../apis/utils';

export interface CurrentLocation {
    city: string;
    latitude: number;
    longitude: number;
}

const useCurrentLocation = (): CurrentLocation | undefined => {
    const { data: currentLocation } = useFetch<CurrentLocation>(currentLocationURL());
    return currentLocation;
};

export default useCurrentLocation;