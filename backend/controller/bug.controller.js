const BugService = require('../services/bug.services');

exports.createBug = async (req, res) => {
    try {
        const bug = await BugService.createBug(req.body);
        res.json(bug);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editBug = async (req, res) => {
    try {
        const updatedBug = await BugService.editBug(req.params.id, req.body);
        res.json(updatedBug);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBug = async (req, res) => {
    try {
        await BugService.deleteBug(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBugs = async (req, res) => {
    try {
        const bugs = await BugService.getBugs();
        res.json(bugs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBugCounts = async (req, res) => {
    try {
        const bugCounts = await BugService.getBugCounts();
        res.json(bugCounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBugsByPriority = async (req, res) => {
    try {
        const priority = req.params.priority;
        const bugs = await BugService.getBugsByPriority(priority);
        res.json(bugs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
