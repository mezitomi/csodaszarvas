type BookingUrlOptions = {
  locale?: string;
  returnTo?: string;
};

export function useExternalLinks() {
  const { locale } = useI18n();
  const runtimeConfig = useRuntimeConfig();
  const bookingUrl = runtimeConfig.public.BOOKING_URL;

  function getBookingUrl(options?: BookingUrlOptions) {
    const target = new URL(bookingUrl);
    const localeValue = options?.locale ?? locale.value;

    target.searchParams.set("lang", localeValue);

    return target.toString();
  }

  return {
    getBookingUrl,
  };
}
