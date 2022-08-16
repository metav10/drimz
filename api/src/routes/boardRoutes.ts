import { Router } from 'express';
import { API_URLS } from '../constant/api';
import { getBoard, updateBoard } from '../controllers/board';
const bodyParser = require('body-parser');

const router = Router();
const jsonParser = bodyParser.json();

router.get(API_URLS.getBoard, jsonParser, getBoard);
router.put(API_URLS.updateBoard, jsonParser, updateBoard);

export default router;