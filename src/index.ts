type HTMLEventMap = WindowEventMap | DocumentEventMap | HTMLElementEventMap;

function eventPromise<K extends keyof HTMLEventMap>(
  this: Window | HTMLElement,
  event: K,
  options?: AddEventListenerOptions
) {
  type ActualEvent = HTMLEventMap[K];
  return new Promise<ActualEvent>((resolve, reject) => {
    const callback = (ev: ActualEvent) => {
      this.removeEventListener(event, callback);
      resolve(ev);
    };

    this.addEventListener(event, callback, options);
  });
}

Window.prototype.on = function<K extends keyof WindowEventMap>(
  event: K,
  options?: AddEventListenerOptions
) {
  return eventPromise.call(this, event, options);
};

Document.prototype.on = function<K extends keyof DocumentEventMap>(
  event: K,
  options?: AddEventListenerOptions
) {
  return eventPromise.call(this, event, options);
};

HTMLElement.prototype.on = function<K extends keyof HTMLElementEventMap>(
  event: K,
  options?: AddEventListenerOptions
) {
  return eventPromise.call(this, event, options);
};

document.createElement("p").addEventListener("load", console.log);
