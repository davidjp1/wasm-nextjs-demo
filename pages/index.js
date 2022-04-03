import Head from 'next/head'
import {useEffect, useRef} from 'react';

export default function Home() {

  const workerRef = useRef();
  
  useEffect(() => {
    const wasmSupported = typeof WebAssembly === 'object' && WebAssembly.validate(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
    workerRef.current = new Worker(wasmSupported ? 'stockfish.js/stockfish.wasm.js' : 'stockfish.js/stockfish.js');
    workerRef.current.addEventListener('message', function (e) {
      console.log(e.data);
    });
    workerRef.current.postMessage('uci');
    return () => {
      workerRef.current.terminate()
    }
  }, []);
  
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello Next.js
    </div>
  )
}
