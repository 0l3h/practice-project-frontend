const {Router} = require('express');
const checkToken = require('./../middlewares/checkToken');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const upload = require('./../utils/fileUpload');
const contestController = require('./../controllers/contestController');

const contestRouter = Router();

contestRouter.get(
    '/',
    checkToken.checkToken,
    contestController.getCustomersContests,
);

contestRouter.get(
    '/getContestById',
    checkToken.checkToken,
    basicMiddlewares.canGetContest,
    contestController.getContestById,
);

contestRouter.post(
    '/getAllContests',
    checkToken.checkToken,
    basicMiddlewares.onlyForCreative,
    contestController.getContests,
);

contestRouter.post(
    '/updateContest',
    checkToken.checkToken,
    upload.updateContestFile,
    contestController.updateContest,
);

contestRouter.get(
    '/dataForContest',
    checkToken.checkToken,
    contestController.dataForContest,
);

module.exports = contestRouter;