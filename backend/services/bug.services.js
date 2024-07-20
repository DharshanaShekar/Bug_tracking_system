const BugModel = require('../model/bug.model');

class BugService{
    static async createBug(bugData) {
        try {
          const user = await BugModel.create(bugData);
          return user;
        } catch (err) {
            console.error('Error creating bug:', err);
          throw err;
        }
      }
      static async editBug(id, bugData) {
        try {
            const updatedBug = await BugModel.findByIdAndUpdate(id, bugData, { new: true });
            return updatedBug;
        } catch (error) {
            console.error('Error updating bug:', error);
            throw error;
        }
    }

    static async deleteBug(id) {
        try {
            await BugModel.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error deleting bug:', error);
            throw error;
        }
    }
    static async getBugs() {
        try {
            const bugs = await BugModel.find(); 
            return bugs;
        } catch (error) {
            console.error('Error fetching bugs:', error);
            throw error;
        }
    }
    static async getBugCounts() {
        try {
            const highCount = await BugModel.countDocuments({ priority: 'high' });
            const mediumCount = await BugModel.countDocuments({ priority: 'medium' });
            const lowCount = await BugModel.countDocuments({ priority: 'low' });

            return { high: highCount, medium: mediumCount, low: lowCount };
        } catch (error) {
            throw error;
        }
    }
    static async getBugsByPriority(priority) {
        try {
            const bugs = await BugModel.find({ priority });
            return bugs;
        } catch (error) {
            console.error('Error fetching bugs by priority:', error);
            throw error;
        }
    }
    
}
module.exports = BugService;
