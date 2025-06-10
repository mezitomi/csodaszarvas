export function useNotifications() {
  const latestNotificationConfirmed = useCookie("latestNotificationIdConfirmed", {
    default: () => 0,
    sameSite: "strict",
    secure: true,
  });

  const latestNotification: { id: number; message: string; enabled: true } | null = {
    id: 2,
    message: `
<h2>Notification Modal</h2>
<p>This is a notification modal that can be used to inform users about important updates or actions.</p>
<p>It can be dismissed or set to not show again.</p>
`,
    enabled: true,
  };

  function confirmNotification() {
    if (latestNotification) {
      latestNotificationConfirmed.value = latestNotification.id;
    }
  }

  return {
    notification: latestNotification.id !== latestNotificationConfirmed.value ? latestNotification : null,
    confirmNotification,
  };
}
