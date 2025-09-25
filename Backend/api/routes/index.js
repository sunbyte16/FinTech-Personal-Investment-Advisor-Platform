import userRouter from './user-routes.js';
import tradeRouter from './trade-router.js';
import portfolioRouter from './portfolio-router.js';
import tempRouter from './temp-routes.js'
// Here we mention all the routes from our parent URL
export default (app) => {
    app.use('/user', userRouter);
    app.use('/trade', tradeRouter);
    app.use ('/temp', tempRouter);
    app.use('/portfolio', portfolioRouter);
}
