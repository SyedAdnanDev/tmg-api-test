let store = {};

const keyValueStoreController = {
    setItem: (req, res) => {
        try {
            if (!store) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            const { key, value, ttl } = req.body;
            if (!key || !value) {
                return res.status(400).json({ error: "Bad Request: 'key' and 'value' are required" });
            }

            const expireAt = ttl ? Date.now() + ttl * 1000 : null;
            store[key] = { value, expireAt };
            res.status(201).json({ message: `Set '${key}' to '${value}'`, store });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getItem: (req, res) => {
        try {
            if (!store) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            const { key } = req.params;
            const item = store[key];
            if (!item || (item.expireAt && Date.now() > item.expireAt)) {
                return res.status(404).json({ error: `Not Found: Key '${key}' does not exist` });
            }
            res.status(200).json({ key, value: item.value });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    deleteItem: (req, res) => {
        try {
            if (!store) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            const { key } = req.params;
            if (!store[key]) {
                return res.status(404).json({ error: `Not Found: Key '${key}' does not exist` });
            }
            delete store[key];
            res.status(200).json({ message: `Deleted key '${key}'`, store });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};

module.exports =  keyValueStoreController ;
