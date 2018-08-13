interface Window {
  on<K extends keyof WindowEventMap>(event: K, options: any): Promise<WindowEventMap[K]>
}

interface HTMLElement {
  on<K extends keyof HTMLElementEventMap>(event: K, options: any): Promise<HTMLElementEventMap[K]>
}
