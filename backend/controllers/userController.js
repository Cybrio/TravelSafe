const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user profile' });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user.userId,
            { username },
            { new: true, runValidators: true }
        ).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user profile' });
    }
};