interface Window {
  on<K extends keyof WindowEventMap>(
    event: K,
    options?: AddEventListenerOptions
  ): Promise<WindowEventMap[K]>;
}

interface HTMLElement {
  on<K extends keyof HTMLElementEventMap>(
    event: K,
    options?: AddEventListenerOptions
  ): Promise<HTMLElementEventMap[K]>;
}
