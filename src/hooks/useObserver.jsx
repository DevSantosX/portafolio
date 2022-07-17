import {useEffect, useRef, useState} from 'react';

const useObserver = options => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer =  useRef(null);

  observer.current = new IntersectionObserver(observerEntries => {
    setEntries(observerEntries)
  }, options);

  useEffect(() => {
    const { current: currentObserver} = observer;
    currentObserver.disconnect();
    if (elements.length) {
      elements.forEach(element => observer.current.observe(element));
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    }
  }, [elements, options]);

  return [observer.current, setElements, entries];
}

export default useObserver;
