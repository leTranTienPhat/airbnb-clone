const systemTheme = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const getTheme = () => localStorage.getItem('theme') || systemTheme();

export const setTheme = (t: any) => {
  localStorage.setItem('theme', t);
  const root = window.document.documentElement;
  if (t === 'dark') {
    root.classList.add(t);
  }
};

export const toggleTheme = () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  const root = window.document.documentElement;
  if (getTheme() === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};