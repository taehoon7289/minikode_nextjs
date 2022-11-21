import {useEffect, useState} from "react";

export default function Loading() {

  const [noShowFlag, setNoShowFlag] = useState(true);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setNoShowFlag(false)
      }, 3000)
    };
  }, []);

  return (
      <>
        <div className={'loading' + `${noShowFlag ? '' : ' no-show'}`}>
          <div className={'container'}>
            <div className={'ring'}></div>
            <div className={'ring'}></div>
            <div className={'ring'}></div>
            <p>Loading...</p>
          </div>
        </div>
      </>
  )
}