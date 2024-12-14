interface IPlaceData {
    country?: string;
    city?: string;
    address?: string;
    temperature?: number;
    time?: Date | number | string;
    isCloudy?: boolean;
  }
  
  type PlaceAddressType = Required<Pick<IPlaceData, "country" | "city" | "address">>;


  const place: PlaceAddressType = {
    country: "Russia",
    city: "Moscow",
    address: "Tverskaya, 7"
  };
  
  console.log(place);
  // Выше описан интерфейс некого места. Все
  // свойства этого места не обязательны.
  // Используя интерфейс IPlaceData создайте
  // тип PlaceAddressType, в котором будут
  // поля country, city, address. При этом
  // поля должны быть обязательны к заполнению.
  