import Bidder from 'models/Bidder';
import connectMongo from 'utils/mongodb';

export default async (req: any, res: any) => {
  await connectMongo();

  const {media_id, bidder, price} = req.body;
  console.log(req.body);
  try {
    let result = null;
    const bid = await Bidder.findOne({media_id: media_id, bidder: bidder});
    if (bid) {
      bid.price = price;
      result = await bid.save();
    } else {
      const bidderInstance = new Bidder({
        media_id,
        bidder,
        price,
      });
      result = await bidderInstance.save();
    }
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }

  res.end();
};
