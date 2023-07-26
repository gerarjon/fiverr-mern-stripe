import express from 'express';
import authRoutes from './auth.route';
import conversationRoute from './conversation.route';
import gigRoute from './gig.route';
import messageRoute from './message.route';
import orderRoute from './order.route';
import reviewRoute from './review.route';
import userRoute from './user.route';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/conversations', conversationRoute);
router.use('/gigs', gigRoute);
router.use('/messages',messageRoute);
router.use('/orders', orderRoute);
router.use('/reviews', reviewRoute)
router.use('/user', userRoute)

export default router;