const Trail = require('../models/Trail');

const trailController = {};

trailController.getTrails = async (req, res) => {
  try {
    const trails = await Trail.find({});

    return res.status(200).json(trails);
  } catch (err) {
    console.error(err);
     return res.status(500).json({
      log: `trailController.getTrails: ERROR: Failed to retrieve trails from db ${err}`,
      message: { error: 'Error occurred in trailController.getTrails. Check server logs for more details.'}
    });
  }
};

trailController.getTrailById = async (req, res) => {
  try {
    const trail = await Trail.findById(req.params.id);

    return res.status(200).json(trail);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      log: `trailController.getTrailById: ERROR: Failed to retrieve trail from db ${err}`,
      message: { error: 'Error occurred in trailController.getTrails. Check server logs for more details.'}
    });
  }
};

trailController.addTrail = async (req, res) => {
  try {
    const trail = await Trail.create(req.body);

    return res.status(200).json(trail);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      log: `trailController.addTrail: ERROR: Failed to create a new trail ${err}`,
      message: { error: 'Error occurred in trailController.addTrail. Check server logs for more details.'}
    });
  }
};


trailController.updateTrail = (req, res) => {
  // TO BE COMPLETED LATER //
};


trailController.deleteTrail = async (req, res) => {
  try {
    const trailDeleted = await Trail.deleteOne({ _id: req.params.id });

    return res.status(200).json(trailDeleted);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      log: `trailController.deleteTrail: ERROR: Failed to delete trail ${err}`,
      message: { error: 'Error occurred in trailController.deleteTrail. Check server logs for more details.'}
    });
  }
};

module.exports = trailController;