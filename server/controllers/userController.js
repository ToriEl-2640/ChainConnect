const { loginWithEmailOrSocial, createUserProfile } = require('../utils/solanaUtils');

const socialLogin = async (req, res) => {
  try {
    const { email, socialId } = req.body;
    const user = await loginWithEmailOrSocial(email, socialId);
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const createProfile = async (req, res) => {
  try {
    const { userId, nftData } = req.body;
    const profile = await createUserProfile(userId, nftData);
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: 'Profile creation failed' });
  }
};

const getProfile = async (req, res) => {
  const { userId } = req.params;
  res.json({ userId, profile: {} });
};

module.exports = { socialLogin, createProfile, getProfile };
