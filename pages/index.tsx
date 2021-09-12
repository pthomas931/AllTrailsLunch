import type { NextPage } from "next";
import Head from "next/head";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import styles from "./Home.module.css";
import { FormEvent, useCallback, useState } from "react";
import LunchList from "./components/LunchList";
import LunchSpot from "./components/LunchList/LunchSpot";

const Home: NextPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || "",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const [selectedPlace, setSelectedPlace] = useState<
    google.maps.places.PlaceResult | undefined
  >(undefined);

  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [search, setSearch] = useState("");

  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map);

      if (placesService === null) {
        const newPlacesService = new window.google.maps.places.PlacesService(
          map
        );

        setPlacesService(newPlacesService);
      }
    },
    [placesService]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
    setPlacesService(null);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (map !== null && placesService !== null) {
      const request = {
        location: map.getCenter(),
        radius: 500,
        type: "food",
        search,
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK)
          setPlaces(results !== null ? results : []);
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>AllTrails Lunch</title>
      </Head>
      <div className={styles.toolbar}>
        <div className={styles.logo}>logo</div>
        <div className={styles.search}>
          <button onClick={() => {}} className={styles.filterButton}>
            Filter
          </button>
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </form>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftDrawer}>
          <LunchList lunchPlaces={places} />
        </div>
        <div className={styles.map}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={{ lat: 38.898108, lng: -77.018938 }}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {places.map(
                (currPlace) =>
                  currPlace.geometry?.location && (
                    <Marker
                      key={currPlace.place_id}
                      position={currPlace.geometry?.location}
                      clickable
                      title={currPlace.name}
                      onClick={() => setSelectedPlace(currPlace)}
                    />
                  )
              )}

              {selectedPlace !== undefined && (
                <InfoWindow position={selectedPlace.geometry?.location}>
                  <LunchSpot lunchSpot={selectedPlace} />
                </InfoWindow>
              )}
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
