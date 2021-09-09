import type { NextPage } from "next";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import styles from "./Home.module.css";
import { useCallback, useState } from "react";
import LunchList from "./components/LunchList";

const Home: NextPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAP_API_KEY || "",
  });

  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.logo}>logo</div>
        <div className={styles.search}>
          <button onClick={() => {}}>Filter</button>
          <input onChange={(e) => setSearch(e.target.value)} />
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
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
