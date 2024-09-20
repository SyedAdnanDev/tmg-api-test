let stack = [];

const stackControl = {
    addItem: (req, res) => {
        try {
            if (!stack) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            const { item } = req.body;
            if (!item) {
                return res.status(400).json({ error: "Bad Request: 'item' is required" });
            }
            stack.push(item); // Add item to the stack
            res.status(201).json({ message: `Added '${item}' to stack`, stack }); // 201 Created
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getItem: (req, res) => {
        try {
            if (!stack) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            if (stack.length < 1) {
                return res.status(404).json({ error: "Not Found: Stack is empty" });
            }

            const topItem = stack.pop(); 
            res.status(200).json({ topItem, stack }); 
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};

module.exports = stackControl;
