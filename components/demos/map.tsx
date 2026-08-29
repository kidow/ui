'use client'

import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from '@/components/kidow/map'

const places = [
  { id: 'seoul', name: '서울', lng: 126.978, lat: 37.5665 },
  { id: 'busan', name: '부산', lng: 129.0756, lat: 35.1796 },
  { id: 'jeju', name: '제주', lng: 126.5312, lat: 33.4996 },
]

export default function MapDemo() {
  return (
    <div className="h-72 w-full overflow-hidden rounded-lg border">
      <Map className="size-full" viewport={{ center: [127.8, 36.2], zoom: 5.2 }}>
        <MapControls />
        {places.map((place) => (
          <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
            <MarkerContent />
            <MarkerTooltip>{place.name}</MarkerTooltip>
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}
