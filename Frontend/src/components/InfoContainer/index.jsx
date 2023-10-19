import style from './InfoContainer.module.scss';

const InfoContainer = () => {
   return (
      <div class={style.container}>
         <h2>To get started, please connect your wallet to B.Wise</h2>
         <p class={style.text}>
            After the wallet is connected, ILGuard will see all of your LPs and show the DEXes where they are located.
         </p>
      </div>
   )
}

export default InfoContainer;