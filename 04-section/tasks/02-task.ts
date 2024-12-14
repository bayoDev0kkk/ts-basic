// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum PaymentType {
    Cash = "cash",
    Card = "card",
    Credit = "credit",
  }
  
  enum Currency {
    EUR = "EUR",
    USD = "USD",
    RUB = "RUB",
  }
  
  interface IPersonalInfo {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
  }  

  interface IDeliveryInfo {
    country: string;
    city: string;
    address: string;
    building: number | string;
    apartment?: number;
    deliveryTime?: string;
  }

  interface IOrderInfo {
    orderCount: number;
    discountPercent: number;
    paymentType: PaymentType;
    currency: Currency;
  }
  interface ICustomer extends IPersonalInfo, IDeliveryInfo, IOrderInfo {}
  
