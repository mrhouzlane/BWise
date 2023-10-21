import style from './About.module.scss';

const About = () => {
   return (
      <div className={style.container}>
         <h2>About BWise</h2>
         <p className={style.text}>
         BWise (Balance Wise) v0.3 is an advanced solution designed exclusively for liquidity providers on decentralized exchanges (DEXs). 
         Powered by Uniswap v4 Hooks and real-time data from Chainlink oracles, Bwise automatically safeguards your liquidity 
         from impermanent loss. With automated rebalancing and precise data, BWise maximizes your LP returns while minimizing 
         potential losses. Seamlessly connect your wallet, and let Bwise take care of your liquidity with its preset threshold.
         </p>
      </div>
   )
}

export default About;