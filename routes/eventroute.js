var router = express.Router();
router.post('/eventroute', (req,res) =>{
  const newDoc= await Event.create(req.body);
});


