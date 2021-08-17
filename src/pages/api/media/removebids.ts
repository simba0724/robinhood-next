import Bidder from 'models/Bidder';
import connectMongo from 'utils/mongodb';

export default async (req: any, res: any) => {
  await connectMongo();

  const {media_id, bidder} = req.body;
  console.log(req.body);
  try {
    let result = null;
    if (bidder) {
      await Bidder.find({media_id: media_id, bidder: bidder}).deleteOne();
    } else {
      await Bidder.find({media_id: media_id}).deleteMany();
    }
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }

  res.end();
};
