import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { PersonalInformation, DeliveryInformation, PaymentInformation, CheckoutData } from "../schema/checkout.schema";

type CheckoutContextType = {
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInformation | null>>
  setDeliveryInfo: React.Dispatch<React.SetStateAction<DeliveryInformation | null>>
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInformation | null>>
  onSubmitAll: (paymentInfo: PaymentInformation) => void
};

const CheckoutContext = createContext<CheckoutContextType>({
  setPersonalInfo: () => { },
  setDeliveryInfo: () => { },
  setPaymentInfo: () => { },
  onSubmitAll: () => { },
});

const CheckoutContextProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInformation | null>(null);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInformation | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInformation | null>(null);

  const onSubmitAll = useCallback((data: PaymentInformation) => {
    if (data) {
      setPaymentInfo(data);
      if (personalInfo && deliveryInfo) {
        const checkoutData: CheckoutData = { ...personalInfo, ...deliveryInfo, ...data }
        console.log("Submitting all: ", checkoutData);
      }
    }
  }, [personalInfo, deliveryInfo]);

  const value: CheckoutContextType = {
    setPersonalInfo,
    setDeliveryInfo,
    setPaymentInfo,
    onSubmitAll,
  }

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  )
};

export default CheckoutContextProvider;

export const useCheckoutContext = () => useContext(CheckoutContext);