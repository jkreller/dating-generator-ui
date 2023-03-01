class ProfileHelper {
    static getNextProfileIdByHistory(history) {
        return history.length % 2 === 0 ? 'P1' : 'P2';
    }
    
    static areFilledProfiles(profiles) {
        return profiles.profile1 &&
            profiles.profile2 &&
            Object.keys(profiles.profile1).length !== 0 &&
            Object.keys(profiles.profile2).length !== 0;
    }
}

export default ProfileHelper;