import React, { useState } from "react";
import { LocationFormModal } from "./LocationFormModal";
import { RestaurantDashboard } from "./RestaurantDashboard";

/*
1.We need to do HTTP request to backend to check if restaurant has location data
2.If it doesn't the we need to create a form where it can add the data and location
3.If it has one then we view the dashboard
 */
export const RestaurantView = () => {
  const [hasLocation, sethasLocation] = useState<boolean>(false);
  return hasLocation ? <LocationFormModal /> : <RestaurantDashboard />;
};
