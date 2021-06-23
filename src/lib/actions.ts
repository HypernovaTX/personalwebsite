// This is used for global actions
export function changeRoute(url: string): void {
  window.scrollTo(0, 0);
  window.location.href = url;
}

export function formatPhoneText(value: string): string {
  value = value.replace(/[^0-9\b]/g, '').substring(0, 10);
  
  if (value.length > 3 && value.length <= 6) {
      value = value.slice(0,3) + "-" + value.slice(3);
  } else if (value.length > 6) {
      value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
  }
  return value;
}