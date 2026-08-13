import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import userRoutes from './routes/user.routes';
import projectRoutes from './routes/project.routes';
import partnershipRoutes from './routes/partnership.routes';
import newsRoutes from './routes/news.routes';
import serviceRoutes from './routes/service.routes'; // 👈 Import
import { errorHandler } from './middlewares/error.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// 📌 Enregistrement des routes de l'API
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/partnerships', partnershipRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/services', serviceRoutes); // 👈 Enregistrement

// ⚠️ Middleware de gestion globale des erreurs
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 API ZARAS démarrée sur http://localhost:${PORT}`);
});