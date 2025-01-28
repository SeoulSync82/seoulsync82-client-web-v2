import { useQuery } from '@tanstack/react-query';
import { queryOptions } from './queries';

export const useSubwayLines = () => {
  return useQuery(queryOptions.getSubwayLines());
};

export const useSubwayStations = (line_uuid: string, { enabled }: { enabled?: boolean }) => {
  return useQuery(queryOptions.getSubwayStations(line_uuid, { enabled: !!line_uuid }));
};

export const useSubwayStationCustom = (
  line_uuid: string,
  station_uuid: string,
  place_uuids: string,
) => {
  return useQuery(queryOptions.getSubwayStationCustom(line_uuid, station_uuid, place_uuids));
};
