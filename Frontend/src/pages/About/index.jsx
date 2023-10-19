import style from './About.module.scss';

const About = () => {
   return (
      <div class={style.container}>
         <h2>About ILGuard</h2>
         <p class={style.text}>
         ILGuard v0.3 is an advanced solution designed exclusively for liquidity providers on decentralized exchanges (DEXs). 
         Powered by Uniswap v4 Hooks and real-time data from Chainlink oracles, ILGuard automatically safeguards your liquidity 
         from impermanent loss. With automated rebalancing and precise data, ILGuard maximizes your LP returns while minimizing 
         potential losses. Seamlessly connect your wallet, and let ILGuard take care of your liquidity with its preset threshold.
         </p>
      </div>
   )
}

export default About;