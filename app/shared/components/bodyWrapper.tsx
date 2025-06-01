import styles from './bodyWrapper.module.css'
import { clsx } from "clsx";

const BodyWrapper = (props:any) => {

  return (
    <div className={clsx(styles['body-wrapper'])}>
      <div className={ clsx(!props.isMobile ? "mt-15 max-w-[1200px] px-10" : "mt-15 px-0")}>
       {props.children}
      </div>
    </div>
  );
};

export default BodyWrapper;
